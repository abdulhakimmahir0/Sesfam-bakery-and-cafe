/* =========================================================
   SISFAM CAFÉ & BAKERY
   PREMIUM WEBSITE JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ================= HEADER ================= */

const header = document.getElementById("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


/* ================= SMOOTH NAVIGATION ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;

            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({

                top: position,

                behavior: "smooth"

            });

        });

    });


/* ================= HERO PARALLAX ================= */

const heroImage =
    document.querySelector(".hero-image img");


window.addEventListener("scroll", () => {

    if (!heroImage) return;

    if (window.innerWidth <= 800) return;

    const scroll =
        window.scrollY;

    if (scroll < window.innerHeight) {

        heroImage.style.transform =
            `scale(1.04) translateY(${scroll * 0.08}px)`;

    }

});


/* ================= IMAGE FALLBACK ================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.background =
                    "#ded5c9";

                image.style.minHeight =
                    "150px";

            }
        );

    });


/* ================= FOOTER YEAR ================= */

const footerYear =
    document.getElementById("footerYear");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} SISFAM. All rights reserved.`;

}


/* ================= CONSOLE ================= */

console.log(
    "SISFAM Café & Bakery — Premium website loaded."
);