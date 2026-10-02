const header = document.getElementById("header");
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");


/* HEADER */

function updateHeader() {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* MOBILE MENU */

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});


/* CLOSE MENU AFTER CLICK */

nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


/* CLOSE WHEN CLICKING OUTSIDE */

document.addEventListener("click", event => {

    if (
        !nav.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        nav.classList.remove("open");
    }

});


/* FOOTER YEAR */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* IMAGE FADE-IN */

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("image-visible");

                imageObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


images.forEach(image => {

    image.style.opacity = "0";
    image.style.transition = "opacity .7s ease";

    imageObserver.observe(image);

});


/* MAKE IMAGE VISIBLE */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("load", () => {
            image.style.opacity = "1";
        });

    });

});