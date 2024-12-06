// Toggle Menu
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('visible');
}

// Attach toggleMenu to a hypothetical hamburger button
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.createElement('button');
    hamburger.textContent = '☰';
    hamburger.setAttribute('aria-label', 'Toggle Navigation');
    hamburger.style.cursor = 'pointer';
    hamburger.addEventListener('click', toggleMenu);

    const nav = document.querySelector('nav');
    nav.prepend(hamburger);

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Project Filter
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Example: Add buttons for filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterBar = document.createElement('div');
    filterBar.style.textAlign = 'center';
    filterBar.innerHTML = `
        <button onclick="filterProjects('all')">All</button>
        <button onclick="filterProjects('web')">Web</button>
        <button onclick="filterProjects('app')">App</button>
    `;
    document.querySelector('#projects').prepend(filterBar);
});

// Lightbox Effect for Project Images
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100vw';
    lightbox.style.height = '100vh';
    lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = '1000';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';

    lightbox.appendChild(img);
    lightbox.addEventListener('click', () => document.body.removeChild(lightbox));

    document.body.appendChild(lightbox);
}

// Attach lightbox to project images
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('#projects img');
    projectImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(img.src));
    });
});

// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let isValid = true;

        // Validate name
        if (!name) {
            alert('Name is required.');
            isValid = false;
        }

        // Validate email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            alert('A valid email address is required.');
            isValid = false;
        }

        // Validate message
        if (!message) {
            alert('Message is required.');
            isValid = false;
        }

        // Submit form if valid
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
