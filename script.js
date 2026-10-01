const header = document.getElementById("header");
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
const backTop = document.getElementById("backTop");


/* HEADER */

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
    backTop.classList.add("visible");
  } else {
    header.classList.remove("scrolled");
    backTop.classList.remove("visible");
  }
});


/* MOBILE MENU */

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});


/* BACK TO TOP */

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* SMOOTH INTERNAL LINKS */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    const headerHeight = header.offsetHeight;

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


/* SIMPLE REVEAL */

const revealElements = document.querySelectorAll(
  ".section-label, .about-heading, .about-copy, .about-values, .service-row, .portfolio-item, .testimonial-main, .contact-copy, .contact-actions"
);

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(35px)";
  element.style.transition =
    "opacity .8s ease, transform .8s ease";
});


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

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


/* SUBTLE HERO MOVEMENT */

const hero = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

  if (!hero || window.innerWidth < 900) return;

  const offset = Math.min(window.scrollY * 0.12, 70);

  hero.style.transform =
    `translateY(${offset}px)`;

});
