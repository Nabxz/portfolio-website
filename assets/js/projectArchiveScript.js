// BACK BUTTON
// Event listener for the back button
document.getElementById('backButton').addEventListener('click', function () {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = '../index.html#portfolio'; // fallback route
    }
});

// Event listener for the "Back to Top" button
document.getElementById('backToTopButton').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// ===============================/ BACK BUTTON /===

// FILTER PROJECTS

// Track active filters (except "All")
const activeFilters = [];

const filterBar = document.getElementById('filterBar');
const buttons = Array.from(filterBar.querySelectorAll('.filter-btn'));
const allBtn = buttons.find(b => b.dataset.lang === 'All');

const rows = Array.from(document.querySelectorAll('.projects-table tbody tr'));

function applyFilter() {
    // If no filters selected, or "All" is active: show all
    if (activeFilters.length === 0) {
        rows.forEach(r => r.hidden = false);
        return;
    }

    // Show rows that match ANY selected language (OR logic)
    rows.forEach(row => {
        const langs = (row.getAttribute('data-langs') || '').split(',').map(s => s.trim());
        const matches = activeFilters.some(f => langs.includes(f));
        row.hidden = !matches;
    });
}

function setAllActive() {
    // Clear all other buttons and filters
    buttons.forEach(btn => btn.classList.remove('active'));
    allBtn.classList.add('active');
    activeFilters.splice(0, activeFilters.length); // clear array in-place
    applyFilter();
}

// Initialize: All is active by default
setAllActive();

// Button click handling
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;

        if (lang === 'All') {
            setAllActive();
            return;
        }

        // Toggling other buttons
        // Deactivate "All" if we're selecting specific languages
        allBtn.classList.remove('active');

        btn.classList.toggle('active');

        const idx = activeFilters.indexOf(lang);
        if (btn.classList.contains('active')) {
            if (idx === -1) activeFilters.push(lang);
        } else {
            if (idx !== -1) activeFilters.splice(idx, 1);
        }

        // If no filters remain, revert to "All"
        if (activeFilters.length === 0) {
            setAllActive();
            return;
        }

        applyFilter();
    });
});

// ===============================/ FILTER PROJECTS /===