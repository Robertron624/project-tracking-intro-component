const hamburgerMenu = document.querySelector('.mobile-hamburger img');

const mobileMenu = document.querySelector('.mobile-nav');

let isMobileMenuOpen = false;

hamburgerMenu.addEventListener('click', () => {
    if (isMobileMenuOpen) {
        mobileMenu.style.display = 'none';
        hamburgerMenu.src = '/images/icon-hamburger.svg';
        isMobileMenuOpen = false;
    } else {
        mobileMenu.style.display = 'block';
        hamburgerMenu.src = '/images/icon-close.svg';
        isMobileMenuOpen = true;
    }
}
);  