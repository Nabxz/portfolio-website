/* Securing API Using A .env file and Using Express.js and Jquery*/
const axios = require('axios');
require('dotenv').config();


/* Connecting To MySQL */
const mysql = require('mysql');


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});


// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database.');
});

/* Encrypting User Password */
const bcrypt = require('bcrypt'); // Add bcrypt for hashing passwords
const SALT_ROUNDS = 10; // Number of salt rounds for bcrypt

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const session = require('express-session');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000, // 1 hour
        httpOnly: true,
        secure: true, // Ensure this is set in production to send the cookie over HTTPS
        sameSite: 'None' // Necessary for the cookie to be sent with cross-origin requests
    }
}));




app.use(cors({
    origin: 'https://electric.mammani.com', // Use your actual subdomain
    credentials: true
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../Front-End'));

const API_KEY = process.env.API_KEY;

// In-memory storage for simplicity; use a database in production!
const subscribers = [];

app.post('/api/subscribe', (req, res) => {
    const email = req.body.email;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email address.' });
    }
    
    // Insert into the database (for this example, assuming you have a table named 'subscribers' with a column named 'email')
    const query = "INSERT INTO subscribers(email) VALUES (?) ON DUPLICATE KEY UPDATE email=email";
    db.query(query, [email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error.' });
        }

        console.log(result); // For debugging. You might want to check if the email was inserted or if it was a duplicate.
        res.json({ success: true });
    });
});


const PORT = process.env.PORT; // Assumes PORT is always provided in production environment
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




/* Contact Us Form */
app.post('/api/contact', (req, res) => {

    console.log(req.body);

    const { title, firstName, surname, question, email } = req.body;

    // Insert into the database
    const query = "INSERT INTO contacts(title, firstName, surname, question, email) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [title, firstName, surname, question, email], (err, result) => {
        
        console.log(title, firstName, surname, question, email);

        
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error.' });
        }

        res.json({ success: true });
    });
});



/* Cars API */
app.get('/getCarInfo', (req, res) => {
    var model = req.query.model; // Use the provided model or default to 'camry'
    var year = req.query.year;
    
    axios.get('https://api.api-ninjas.com/v1/cars', {
        headers: {
            'X-Api-Key': API_KEY
        },
        params: {
            model: model
        }
    })
    .then(response => {
        if(year) {
            // Filter the results based on the year if it's provided
            var filteredData = response.data.filter(car => Number(car.year) >= Number(year));
            res.json(filteredData);
        } else {
            res.json(response.data);
        }
    })
    .catch(error => {
        if (error.response) {
            console.error('Error:', error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else if (error.request) {
            console.error('Request made but no response received:', error.request);
            res.status(500).json({ message: 'Internal server error.' });
        } else {
            console.error('Request setup error:', error.message);
            res.status(500).json({ message: 'Internal server error.' });
        }
    });
});



/* SIGN IN */

// Signup Route
app.post('/api/signup', (req, res) => {
    const { email, firstName, lastName, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    bcrypt.hash(password, SALT_ROUNDS, (err, hashedPassword) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error.' });
        }

        const query = "INSERT INTO userAccount(email, firstName, lastName, password) VALUES (?, ?, ?, ?)";
        db.query(query, [email, firstName, lastName, hashedPassword], (err, result) => {
            if (err) {
                console.error(err);
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({ message: 'Duplicate account. Cannot create account.' });
                }
                return res.status(500).json({ message: 'Internal Server Error.' });
            }

            res.json({ success: true });
        });
    });
});

// Login Route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    const query = "SELECT email, firstName, lastName, password FROM userAccount WHERE email = ?";
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error.' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Email not found. Please check your email.' });
        }

        bcrypt.compare(password, results[0].password, (err, isMatch) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal Server Error.' });
            }

            if (!isMatch) {
                return res.status(401).json({ message: 'Password is incorrect. Please try again.' });
            }

            // Save user details in the session if password matches
            req.session.user = {
                email: results[0].email,
                firstName: results[0].firstName,
                lastName: results[0].lastName
            };

            // Set the cookie duration based on the 'keepMeSignedIn' value
            if (req.body.keepMeSignedIn) {
                req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // e.g., 30 days
            } else {
                req.session.cookie.expires = false; // Session will end when the browser is closed
            }

            res.json({ success: true });
        });
    });
});


// Profile Route
app.get('/api/profile', (req, res) => {
    if (!req.session || !req.session.user) {
        return res.status(401).json({ message: 'Not logged in' });
    }
    res.json(req.session.user);
});


// Logout Route
app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ message: 'Logged out' });
});



/* FORGOT PASSWORD */
app.post('/api/forgot-password', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Invalid email address.' });
    }

    const query = "SELECT email FROM userAccount WHERE email = ?";
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Email not found in our system. Please check your email.' });
        }

        // Here, in a real-world scenario, you would send an email to the user with a password reset link. 
        // Since we are not actually sending an email, we'll just send a success message.

        res.json({ success: true, message: 'Password reset link sent to your email (simulated).' });
    });
});



/* EDIT PROFILE FUNCTIONALITIES */
/* Change UserName */
app.post('/api/update-username', (req, res) => {
    const { newFirstName, newLastName } = req.body; // Destructure both first and last name
    const userEmail = req.session.user.email;

    // Update the firstName and lastName in the database
    const query = "UPDATE userAccount SET firstName = ?, lastName = ? WHERE email = ?";
    db.query(query, [newFirstName, newLastName, userEmail], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Internal Server Error.' });
        }

        if (result.affectedRows === 1) {
            return res.json({ success: true });
        } else {
            return res.json({ success: false, message: 'Name update failed.' });
        }
    });
});



/* Change Email */
app.post('/api/update-email', (req, res) => {
    // Check if the user is authenticated
    if (!req.session || !req.session.user || !req.session.user.email) {
        return res.status(401).json({ success: false, message: 'Not authenticated.' });
    }

    const { newEmail } = req.body;
    const userEmail = req.session.user.email; // Retrieve the email from the user's session

    // Update the email in the database
    const query = "UPDATE userAccount SET email = ? WHERE email = ?";
    db.query(query, [newEmail, userEmail], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Internal Server Error.' });
        }

        if (result.affectedRows === 1) {
            // Update the session email to the new email
            req.session.user.email = newEmail;
            return res.json({ success: true });
        } else {
            return res.json({ success: false, message: 'Email update failed.' });
        }
    });
});


/* Change Password */
app.post('/api/update-password', (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const userEmail = req.session.user.email; // Assuming you have user session data

    // Verify the old password before updating
    const query = "SELECT password FROM userAccount WHERE email = ?";
    db.query(query, [userEmail], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Internal Server Error.' });
        }

        if (results.length === 1) {
            const hashedPassword = results[0].password;

            bcrypt.compare(oldPassword, hashedPassword, (err, isMatch) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ success: false, message: 'Internal Server Error.' });
                }

                if (isMatch) {
                    // Update the password in the database
                    bcrypt.hash(newPassword, SALT_ROUNDS, (err, hashedNewPassword) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).json({ success: false, message: 'Internal Server Error.' });
                        }

                        const updateQuery = "UPDATE userAccount SET password = ? WHERE email = ?";
                        db.query(updateQuery, [hashedNewPassword, userEmail], (err, result) => {
                            if (err) {
                                console.error(err);
                                return res.status(500).json({ success: false, message: 'Internal Server Error.' });
                            }

                            if (result.affectedRows === 1) {
                                return res.json({ success: true });
                            } else {
                                return res.json({ success: false, message: 'Password update failed.' });
                            }
                        });
                    });
                } else {
                    return res.json({ success: false, message: 'Old password is incorrect.' });
                }
            });
        } else {
            return res.json({ success: false, message: 'User not found.' });
        }
    });
});



/* DEALERSHIP FORM Submission */
app.post('/api/dealership', (req, res) => {
    const { fullName, phoneNumber, carBrand, customCarBrand, dealershipAddress } = req.body;

    // Check if customCarBrand is used based on the value of carBrand
    let finalCarBrand = carBrand === 'other' ? customCarBrand : carBrand;

    // Insert into the database
    const query = "INSERT INTO dealershipform(fullName, phoneNumber, carBrand, customCarBrand, dealershipAddress) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [fullName, phoneNumber, finalCarBrand, customCarBrand, dealershipAddress], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error.' });
        }

        res.json({ success: true });
    });
});

