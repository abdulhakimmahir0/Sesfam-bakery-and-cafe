document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       HEADER
    ========================= */

    const header = document.getElementById("header");

    if (header) {
        function updateHeader() {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }

        window.addEventListener("scroll", updateHeader);
        updateHeader();
    }


    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");
        });

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
            });
        });

        document.addEventListener("click", event => {

            if (
                !nav.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                nav.classList.remove("open");
            }

        });
    }


    /* =========================
       FOOTER YEAR
    ========================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        "section, .menu-card, .cake-card, .occasion-card, .value-card, .location-card"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                        revealObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.08
            }
        );

        revealElements.forEach(element => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("revealed");
        });

    }


    /* =========================
       IMAGE HANDLING
       IMPORTANT:
       Images are NEVER hidden.
    ========================= */

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.style.opacity = "1";
        image.style.visibility = "visible";

        image.addEventListener("load", () => {
            image.classList.add("image-loaded");
        });

        image.addEventListener("error", () => {
            image.classList.add("image-error");
            console.warn("Image could not be loaded:", image.src);
        });

    });


    /* =========================
       SMOOTH ANCHOR SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});