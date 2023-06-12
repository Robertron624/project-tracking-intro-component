const hamburgerMenu = document.querySelector(".mobile-hamburger img");

const mobileMenuModal = document.querySelector(".mobile-nav");

let isMobileMenuOpen = false;

hamburgerMenu.addEventListener("click", () => {
    if (isMobileMenuOpen) {
        hamburgerMenu.src = "/images/icon-hamburger.svg";
        isMobileMenuOpen = false;
    } else {
        mobileMenuModal.showModal();
        hamburgerMenu.src = "/images/icon-close.svg";
        isMobileMenuOpen = true;
    }
});

// Close mobile menu when user clicks outside of it

window.addEventListener("click", (e) => {
    if (e.target == mobileMenuModal) {
        mobileMenuModal.close();
        hamburgerMenu.src = "/images/icon-hamburger.svg";
        isMobileMenuOpen = false;
    }
});