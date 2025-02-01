/* Basic interactivity and form handling */
document.addEventListener('DOMContentLoaded', function () {
    // When the page is loaded, set all animated elements to visible
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach(function (el) {
        el.style.opacity = '1';
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}); 