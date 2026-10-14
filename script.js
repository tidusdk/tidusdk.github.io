// Vi bruger JavaScript senere, når siden har fået sin HTML og CSS.

const year = new Date().getFullYear();
document.querySelector("#current-year").textContent = year;

const projectToggle = document.querySelector(".project-toggle");
const projectNote = document.querySelector(".project-note");

projectToggle.addEventListener("click", () => {
  const isHidden = projectNote.hidden;
  projectNote.hidden = !isHidden;
  projectToggle.setAttribute("aria-expanded", String(isHidden));
  projectToggle.textContent = isHidden ? "Hide project note" : "Read project note";
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryMenu = document.querySelector("#primary-menu");

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    
menuToggle.setAttribute("aria-expanded", String(!isOpen));
primaryMenu.classList.toggle("is-open", !isOpen);
});

primaryMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        primaryMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");  
    });
});

document.addEventListener("keydown", (event) => {
    const isMenuOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isMenuOpen) {
        primaryMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
    }   
});