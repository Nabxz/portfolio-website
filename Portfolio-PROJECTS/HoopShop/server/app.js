const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();


const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Database connection options
const options = {
    host: process.env.DB_HOST,
    port: 3306, // Default MySQL port
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

// Create a new instance of the MySQLStore
const sessionStore = new MySQLStore(options);

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database.');
});

const SALT_ROUNDS = 10;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore, 
    cookie: {
        maxAge: 60 * 60 * 1000, // 1 hour
        httpOnly: true,
        secure: true, 
    }
    
}));

app.use(cors({
    origin: 'https://hoopshop.mammani.com', 
    credentials: true
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
    if (req.session.userId) {
        next(); // User is logged in, proceed to the next middleware
    } else {
        console.log("SESSION DURING MIDDLEWARE");
        console.log(req.session);
        res.status(401).json({ message: 'Not authorized' }); // User is not logged in
    }
}



// Check Session Route - Check if User is Logged In
app.get('/api/check-session', (req, res) => {
    if (req.session.userId) {
        // If session exists and has userId, the user is logged in
        res.json({ loggedIn: true, userId: req.session.userId });
    } else {
        // No session or no userId means the user is not logged in
        res.json({ loggedIn: false });
    }
});



// Shopping Cart Route - Add Item to Cart
app.post('/api/add-to-cart', isLoggedIn, (req, res) => {
    const { productId, quantity, size } = req.body;
    const userId = req.session.userId;

    // First, select the existing cart data for the user
    const selectQuery = 'SELECT cart_data FROM carts WHERE user_id = ?';
    db.query(selectQuery, [userId], (err, results) => {
        if (err) {
            console.error('Select query error:', err);
            return res.status(500).json({ message: 'Error retrieving the cart' });
        }

        // Parse the existing cart data or initialize to an empty array
        let cart = results.length ? JSON.parse(results[0].cart_data) : [];
        // Find if the product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.productId === productId && item.size === size);
        
        if (existingProductIndex > -1) {
            // If exists, update the quantity
            cart[existingProductIndex].quantity += quantity;
        } else {
            // If not, push the new item
            cart.push({ productId, quantity, size });
        }

        // Perform the insert or update operation
        const insertOrUpdateQuery = `
            INSERT INTO carts (user_id, cart_data) 
            VALUES (?, ?)
            ON DUPLICATE KEY UPDATE
            cart_data = VALUES(cart_data);
        `;
        db.query(insertOrUpdateQuery, [userId, JSON.stringify(cart)], (updateErr) => {
            if (updateErr) {
                console.error('Insert or update query error:', updateErr);
                return res.status(500).json({ message: 'Error updating the cart' });
            }
            res.json({ message: 'Cart updated successfully' });
        });
    });
});




// Fetch Cart Route - Get Cart Items for Logged In User
app.get('/api/cart', isLoggedIn, (req, res) => {
    const userId = req.session.userId;

    const query = 'SELECT cart_data FROM carts WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ message: 'Error querying the database' });
        }

        if (results.length === 0) {
            return res.json({ cart: [] });
        } else {
            try {
                const cart = JSON.parse(results[0].cart_data);
                res.json({ cart });
            } catch (parseError) {
                console.error('JSON parsing error:', parseError);
                return res.status(500).json({ message: 'Error parsing cart data' });
            }
        }
    });
});

// Delete Cart Item Route - Remove an Item from Cart
app.post('/api/cart/delete-item', isLoggedIn, (req, res) => {

    const { productId, size } = req.body;

    const userId = req.session.userId;


    const selectQuery = 'SELECT cart_data FROM carts WHERE user_id = ?';
    db.query(selectQuery, userId, (selectErr, results) => {
        if (selectErr) {
            return res.status(500).json({ message: 'Error querying the database' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Cart not found' });
        } else {
            let cart = JSON.parse(results[0].cart_data);
            cart = cart.filter(item => !(item.productId === productId && item.size === size));

            const updateQuery = 'UPDATE carts SET cart_data = ? WHERE user_id = ?';
            db.query(updateQuery, [JSON.stringify(cart), userId], (updateErr) => {
                if (updateErr) {
                    return res.status(500).json({ message: 'Error updating the cart' });
                }
                res.json({ message: 'Item removed successfully' });
            });
        }
    });
});



// User Login Route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find the user by email
    const query = 'SELECT user_id, password FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error querying the database' });
        }

        if (results.length === 0) {
            // No user found with that email
            return res.status(401).json({ message: 'Incorrect email or password' });
        }

        const user = results[0];

        // Compare hashed password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            // Passwords do not match
            return res.status(401).json({ message: 'Incorrect email or password' });
        }

        // Passwords match, create session
       // On successful login:
        req.session.userId = user.user_id; // Store userId in session
        req.session.save(err => {
            if(err) {
                console.error('Session save error:', err);
                return res.status(500).send('Could not save session');
            } else {
                console.log("SESSION AFTER LOGIN");
                console.log(req.session);
                res.json({ message: 'Logged in successfully', userId: user.user_id });
            }
        });
          
    
    });
        
});



// User Registration Route
app.post('/api/create-account', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    // Basic validation
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const userExistsQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(userExistsQuery, [email], async (userErr, userResults) => {
        if (userErr) {
            return res.status(500).json({ message: 'Error checking user existence' });
        }

        if (userResults.length > 0) {
            // User already exists
            return res.status(409).json({ message: 'Email already in use' });
        }

        // User does not exist, proceed with creating new user
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Insert new user into the database
        const createUserQuery = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
        db.query(createUserQuery, [first_name, last_name, email, hashedPassword], (createErr, createResults) => {
            if (createErr) {
                return res.status(500).json({ message: 'Error creating new user' });
            }

            // User created successfully, set up the session
            req.session.userId = createResults.insertId;
            res.json({ message: 'Account created successfully' });
        });
    });
});



// User Details Route - Get User Profile Details
app.get('/api/user-details', isLoggedIn, (req, res) => {
    const userId = req.session.userId;

    const query = 'SELECT first_name, last_name, email FROM users WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ message: 'Error querying the database for user details' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            // Assuming the user exists and you've got the result as expected
            const userDetails = {
                firstName: results[0].first_name,
                lastName: results[0].last_name,
                email: results[0].email
            };
            res.json({ userDetails });
        }
    });
});



// User Update Details Route
app.post('/api/update-user-details', isLoggedIn, async (req, res) => {
    const { firstName, lastName } = req.body;
    const userId = req.session.userId;

    // Validate firstName and lastName as needed...

    const updateQuery = 'UPDATE users SET first_name = ?, last_name = ? WHERE user_id = ?';
    db.query(updateQuery, [firstName, lastName, userId], (err, results) => {
        if (err) {
        console.error('Database update error:', err);
        return res.status(500).json({ message: 'Error updating user details' });
        }
        if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
        } else {
        res.json({ message: 'User details updated successfully' });
        }
    });
});

  

// Email Update Route
app.post('/api/update-email', isLoggedIn, async (req, res) => {
    const { oldEmail, newEmail } = req.body;
    const userId = req.session.userId;

    // Validate new email format (basic validation)
    if (!newEmail.includes('@')) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Check if new email is already in use by another user
    const emailInUseQuery = 'SELECT user_id FROM users WHERE email = ? AND user_id != ?';
    db.query(emailInUseQuery, [newEmail, userId], (emailErr, emailResults) => {
        if (emailErr) {
            console.error('Database query error:', emailErr);
            return res.status(500).json({ message: 'Error querying the database' });
        }

        if (emailResults.length > 0) {
            // New email is already in use
            return res.status(409).json({ message: 'This email is already in use' });
        }

        // Check if the old email matches the one in the database
        const query = 'SELECT email FROM users WHERE user_id = ?';
        db.query(query, [userId], async (err, results) => {
            if (err) {
                console.error('Database query error:', err);
                return res.status(500).json({ message: 'Error querying the database' });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: 'User not found' });
            }

            const user = results[0];

            if (user.email !== oldEmail) {
                return res.status(401).json({ message: 'Old email does not match' });
            }

            // Update the email in the database
            const updateQuery = 'UPDATE users SET email = ? WHERE user_id = ?';
            db.query(updateQuery, [newEmail, userId], (updateErr, updateResults) => {
                if (updateErr) {
                    console.error('Database update error:', updateErr);
                    return res.status(500).json({ message: 'Error updating email' });
                }
                if (updateResults.affectedRows === 0) {
                    return res.status(404).json({ message: 'User not found' });
                } else {
                    res.json({ message: 'Email updated successfully' });
                }
            });
        });
    });
});




// Password Update Route
app.post('/api/update-password', isLoggedIn, async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const userId = req.session.userId;

    // Basic validation
    if (!oldPassword || !newPassword) {
        return res.status(400).json({ message: 'Both old and new passwords are required' });
    }

    // Retrieve user's current password hash from the database
    const query = 'SELECT password FROM users WHERE user_id = ?';
    db.query(query, [userId], async (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ message: 'Error querying the database' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];

        // Compare old password with the hash in the database
        const match = await bcrypt.compare(oldPassword, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Old password does not match' });
        }

        // Hash the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

        // Update the password in the database
        const updateQuery = 'UPDATE users SET password = ? WHERE user_id = ?';
        db.query(updateQuery, [hashedNewPassword, userId], (updateErr, updateResults) => {
            if (updateErr) {
                console.error('Database update error:', updateErr);
                return res.status(500).json({ message: 'Error updating password' });
            }
            if (updateResults.affectedRows === 0) {
                return res.status(404).json({ message: 'User not found' });
            } else {
                res.json({ message: 'Password updated successfully' });
            }
        });
    });
});



app.get('/api/user-addresses', isLoggedIn, (req, res) => {
    const userId = req.session.userId;
    // Include address_id in the SELECT query
    const query = 'SELECT address_id, address FROM user_addresses WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ message: 'Error retrieving addresses' });
        }
        // Map over the results and create an object with address_id and parsed address
        const addresses = results.map(result => {
            return {
                address_id: result.address_id,
                ...JSON.parse(result.address)
            };
        });
        res.json({ addresses });
    });
});


// Add User Address Route
app.post('/api/user-addresses', isLoggedIn, (req, res) => {
    const { address } = req.body;
    const userId = req.session.userId;

    console.log(`Attempting to add address for user ${userId}:`, address);

    // Insert the address into the user_addresses table
    const query = 'INSERT INTO user_addresses (user_id, address) VALUES (?, ?)';
    const addressString = JSON.stringify(address);

    console.log(`Executing query: ${query}`);
    console.log(`With values: ${userId}, ${addressString}`);

    db.query(query, [userId, addressString], (err, results) => {
        if (err) {
            console.error('Failed to add address:', err);
            return res.status(500).json({ message: 'Error adding address', error: err });
        }
        console.log(`Address added successfully with addressId: ${results.insertId}`);
        res.json({ message: 'Address added successfully', addressId: results.insertId });
    });
});



// Delete User Address Route
app.delete('/api/user-addresses/:addressId', isLoggedIn, (req, res) => {
    const userId = req.session.userId;
    const { addressId } = req.params;
    if (!addressId) {
        return res.status(400).json({ message: 'No address ID provided' });
    }
    const query = 'DELETE FROM user_addresses WHERE address_id = ? AND user_id = ?';
    db.query(query, [addressId, userId], (err, result) => {
        if (err) {
            console.error('Database delete error:', err);
            return res.status(500).json({ message: 'Error deleting address' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Address not found or you do not have permission to delete it' });
        }
        res.json({ message: 'Address deleted successfully' });
    });
});



// User Logout Route
app.post('/api/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.status(500).json({ message: 'Could not log out, please try again' });
        } else {
            res.json({ message: 'Logged out successfully' });
        }
    });
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

