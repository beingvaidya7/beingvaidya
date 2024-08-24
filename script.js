document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('#mobile-menu').classList.toggle('active');
});

// Close menu if clicking outside of it
document.addEventListener('click', function(event) {
    const menu = document.querySelector('#mobile-menu');
    const toggle = document.querySelector('.menu-toggle');
    const isClickInside = menu.contains(event.target) || toggle.contains(event.target);

    if (!isClickInside) {
        menu.classList.remove('active');
    }
});
