// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Code to handle interactivity and dynamic content goes here

    // Example: Toggle visibility of division sections in about.html
    const divisionButtons = document.querySelectorAll('.division-button');
    divisionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const divisionContent = document.querySelector(`#${this.dataset.division}`);
            divisionContent.classList.toggle('hidden');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to nav items when scrolling
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});