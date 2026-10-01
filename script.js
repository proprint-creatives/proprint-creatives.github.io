/* =========================================================
   PROPRINT CREATIVES
   JAVASCRIPT
========================================================= */


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("siteHeader");

function updateHeader() {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
    document.querySelectorAll("[data-count]");

let countersStarted = false;

function animateCounters() {

    if (countersStarted) return;

    countersStarted = true;

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.count);

        let current = 0;

        const duration = 1400;

        const startTime = performance.now();


        function updateCounter(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(elapsed / duration, 1);

            const eased =
                1 - Math.pow(1 - progress, 3);

            current =
                Math.floor(target * eased);

            counter.textContent = current;

            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;

            }

        }

        requestAnimationFrame(updateCounter);

    });

}


const statsSection =
    document.querySelector(".stats-section");


if (statsSection) {

    const statsObserver =
        new IntersectionObserver(

            entries => {

                if (entries[0].isIntersecting) {

                    animateCounters();

                    statsObserver.disconnect();

                }

            },

            {
                threshold: 0.35
            }

        );

    statsObserver.observe(statsSection);

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 800) {

        backTop.classList.add("visible");

    } else {

        backTop.classList.remove("visible");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId === "#" ||
            targetId.length < 2
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* =========================================================
   SUBTLE HERO PARALLAX
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");

if (heroVisual) {

    window.addEventListener("mousemove", event => {

        if (window.innerWidth < 800) return;

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);

        heroVisual.style.transform =
            `translate(${x * 10}px, ${y * 10}px)`;

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navLinks =
    document.querySelectorAll(".main-nav a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();
