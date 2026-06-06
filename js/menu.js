/*Kód pro otevírání a zavírání mobilního hamburger menu*/

const MobileMenu = document.getElementById("mobile-menu");
const MenuButton = document.getElementById("mobile-button");

MenuButton.addEventListener('click', () => {
    MobileMenu.classList.toggle('mobile-menu-active');
    MenuButton.classList.toggle('mobile-menu-box-active');
});

document.addEventListener('click', (e) => {
    const isClickInsideMenu = MobileMenu.contains(e.target);
    const isClickOnButton = MenuButton.contains(e.target);
    
    if (!isClickInsideMenu && !isClickOnButton && MobileMenu.classList.contains('mobile-menu-active')) {
        MobileMenu.classList.remove('mobile-menu-active');
        MenuButton.classList.remove('mobile-menu-box-active');
    }
});