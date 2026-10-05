const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check localStorage for saved theme preference
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on page load
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️';
}

// Theme Toggle Functionality
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Confirmation message
        formStatus.textContent = "Thank you! Your message has been sent successfully.";
        contactForm.reset();
    });
}
