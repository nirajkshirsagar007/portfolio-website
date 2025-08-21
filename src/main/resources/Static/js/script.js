document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Loading Animation ---
    const loader = document.querySelector('.loader-wrapper');

    window.addEventListener('load', () => {
        if (loader) {
            setTimeout(() => {
                loader.classList.add('loader--hidden');
            }, 1500);
        }
    });


    // --- 2. Smooth Scrolling Navigation ---
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // ✅ Close menu after click (mobile)
            document.getElementById("nav-links")?.classList.remove("active");
            document.getElementById("hamburger")?.classList.remove("open");
        });
    });


    // --- 3. Hamburger Menu Toggle ---
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open");
            navMenu.classList.toggle("active");
        });
    }

    // --- 4. Header blur effect on scroll ---
    const header = document.querySelector(".header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const arrows = document.querySelectorAll(".scroll-down");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const arrow = entry.target.querySelector(".scroll-down");
            if (!arrow) return;

            if (entry.isIntersecting) {
                arrow.classList.add("visible");
            } else {
                arrow.classList.remove("visible");
            }
        });
    }, { threshold: 0.6 }); // show arrow when 60% of section is in view

    document.querySelectorAll("section").forEach(section => {
        if (section.querySelector(".scroll-down")) {
            observer.observe(section);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-glow");

    // Follow mouse
    document.addEventListener("mousemove", e => {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    });

    // Select all interactive elements (links, buttons, tiles, highlight cards)
    const hoverElements = document.querySelectorAll("a, button, .tile, .highlight-card, .project-card, .experience-card");

    hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.style.opacity = "1";  // Show glow
        });

        el.addEventListener("mouseleave", () => {
            cursor.style.opacity = "0";  // Hide glow
        });
    });
});
