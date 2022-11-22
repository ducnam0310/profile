const styleSwitcherToogle = document.querySelector(".style-switcher-toggler");
styleSwitcherToogle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

const alternateStyles = document.querySelectorAll(".alternate-style");
const setActiveStyle = (color) => {
    alternateStyles.forEach(style => {
        if (style.getAttribute("title") === color) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        document.querySelector("div.logo img").setAttribute("src", "./dist/img/logo-white.png.png");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        document.querySelector("div.logo img").setAttribute("src", "./dist/img/logo-no-background.png");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});