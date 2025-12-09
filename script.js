// Function to toggle the mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        // Toggles the 'hidden' class to show/hide the menu
        mobileMenu.classList.toggle('hidden');
    });
}