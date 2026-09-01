// ===============================
// Welcome Message
// ===============================

window.onload = function () {
    console.log("Welcome to Devadharshini's Portfolio");
};


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(".skill-card, .project-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s";

    observer.observe(card);

});


// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

    } else {

        alert("Thank you! Your message has been sent.");

        form.reset();

    }

});


// ===============================
// Typing Animation
// ===============================

const text = "Python Full Stack Developer";
let index = 0;

const heading = document.querySelector(".home-content h3");

heading.innerHTML = "";

function typeEffect() {

    if (index < text.length) {

        heading.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);

    }

}

typeEffect();