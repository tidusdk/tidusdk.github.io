// === Årstal i footer === 

const year = new Date().getFullYear();
document.querySelector("#current-year").textContent = year;

// === Her viser og skjuler vi projekt-noten ===

const projectToggle = document.querySelector(".project-toggle");
const projectNote = document.querySelector(".project-note");

projectToggle.addEventListener("click", () => {
    if (projectNote.hidden) {
        projectNote.hidden = false;
        projectToggle.textContent = "Hide project note";
        projectToggle.setAttribute("aria-expanded", "true");
    } else {
        projectNote.hidden = true;
        projectToggle.textContent = "Read project note";
        projectToggle.setAttribute("aria-expanded", "false");
    }
});

// === Her viser og skjuler vi links i mobil menuen ===

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

menuToggle.addEventListener("click", () => {
    primaryNav.classList.toggle("is-open");

    if (primaryNav.classList.contains("is-open")) {
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.setAttribute("aria-expanded", "false");
    }
}); 

// === Luk menuen, når man klikker på et link ===

primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        primaryNav.classList.remove("is-open");
    });
});

// === Luk menuen med Escape-tasten ===

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && primaryNav.classList.contains("is-open")) {
        primaryNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
    }
});



