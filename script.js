
/* =========================
   LOGO ON SCROLL
========================= */

let lastScroll = 0;

const adalmynd = document.querySelector(".aðalmynd");

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 80) {

        // Scrolling down
        adalmynd.style.transform = "translateY(-30px)";
        adalmynd.style.opacity = "0";

    } else {

        // Scrolling up
        adalmynd.style.transform = "translateY(0)";
        adalmynd.style.opacity = "1";

    }

    lastScroll = currentScroll;

});


/* =========================
   MENU
========================= */

const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", (event) => {

    event.stopPropagation();

    menu.classList.toggle("active");

});


/* Close menu when clicking outside */

document.addEventListener("click", (event) => {

    if (!event.target.closest(".hero")) {
        menu.classList.remove("active");
    }

});


/* Close menu after selecting a link */

menu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });

});


/* =========================
   NEWS SLIDER
========================= */

const slider = document.querySelector(".slider");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

function getScrollAmount() {

    const card = slider.querySelector(".card");

    if (!card) {
        return 0;
    }

    const gap = parseFloat(
        getComputedStyle(slider).gap
    );

    return card.offsetWidth + gap;
}


/* Update arrow visibility */

function updateButtons() {

    const maxScroll =
        slider.scrollWidth - slider.clientWidth;

    leftBtn.style.opacity =
        slider.scrollLeft <= 5 ? "0" : "1";

    leftBtn.style.pointerEvents =
        slider.scrollLeft <= 5 ? "none" : "auto";


    rightBtn.style.opacity =
        slider.scrollLeft >= maxScroll - 5
            ? "0"
            : "1";

    rightBtn.style.pointerEvents =
        slider.scrollLeft >= maxScroll - 5
            ? "none"
            : "auto";
}


/* Right arrow */

rightBtn.addEventListener("click", () => {

    slider.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth"
    });

});


/* Left arrow */

leftBtn.addEventListener("click", () => {

    slider.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth"
    });

});


/* Update arrows while scrolling */

slider.addEventListener(
    "scroll",
    updateButtons
);


/* Update after page loads */

window.addEventListener(
    "load",
    updateButtons
);


/* Update when phone rotates / window changes */

window.addEventListener(
    "resize",
    updateButtons
);
