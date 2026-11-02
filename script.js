
// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuToggle.textContent = nav.classList.contains("active")
        ? "✕"
        : "☰";
});


// FECHAR MENU AO CLICAR EM UM LINK

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ANIMAÇÕES AO ROLAR A PÁGINA

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


// ANO AUTOMÁTICO NO RODAPÉ

document.getElementById("year").textContent =
    new Date().getFullYear();
