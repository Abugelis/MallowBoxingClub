const btn = document.querySelector(".site-nav__toggle");
const nav = document.querySelector(".site-nav");
const overlay = document.querySelector(".site-nav__overlay");

const navLinks = document.querySelectorAll(".site-nav__links a");
const currentPage = window.location.pathname.split("/").pop();

const faqItems = document.querySelectorAll('.faq-item');


function openNav() {
    nav.classList.add("open-nav");
    btn.setAttribute("aria-expanded", "true");
    document.body.classList.add("open-nav");
}

function closeNav() {
    nav.classList.remove("open-nav");
    btn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("open-nav");
}

btn.addEventListener("click", () => {
    const isOpen = nav.classList.contains("open-nav");

    if (isOpen) {
        closeNav();
    } else {
        openNav();
    }
});


// Close nav if overlay is clicked
overlay.addEventListener("click", closeNav);

// Close nav with "ESC" button if it's opened
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open-nav")) {
        closeNav();
    }
});

// Close nav if menu link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", closeNav);
});



// Get the current page and add .active class to it. Making that menu item underlined
navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});


/* ---------------- FAQ ACCORDION ---------------- */

faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    questionBtn.addEventListener('click', () => {
        const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

        // Close all
        faqItems.forEach(otherItem => {
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherIcon = otherItem.querySelector('.faq-icon');

            otherAnswer.style.maxHeight = null;
            otherIcon.textContent = '+';
        });

        // Toggle current
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.textContent = '−';
        } else {
            answer.style.maxHeight = null;
            icon.textContent = '+';
        }
    });
});

/* ---------------- FADE IN ANIMATION ---------------- */

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    fadeElements.forEach(el => observer.observe(el));
});
