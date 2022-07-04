const mediaDesktop = window.matchMedia("(min-width: 1000px)");
const nav = document.querySelector(".header-nav");

window.addEventListener("scroll", (event) => {
  if (mediaDesktop.matches) {
    window.scrollY > nav.offsetTop
      ? nav.classList.add("fixed")
      : nav.classList.remove("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});
