// Add event listeners for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'mooth' });
    });
});

// Add animation to hero section
document.querySelector('.hero').addEventListener('mouseover', event => {
    event.target.style.transform = 'cale(1.1)';
});

document.querySelector('.hero').addEventListener('mouseout', event => {
    event.target.style.transform = 'cale(1)';
});

// Add animation to products
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseover', event => {
        event.target.style.transform = 'cale(1.1)';
    });

    product.addEventListener('mouseout', event => {
        event.target.style.transform = 'cale(1)';
    });
});