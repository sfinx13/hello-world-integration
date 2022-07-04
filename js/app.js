const nav = document.querySelector('.header-nav');
window.addEventListener("scroll", (event) => {
    window.scrollY > nav.offsetTop ? nav.classList.add('fixed') : nav.classList.remove('fixed');
});
