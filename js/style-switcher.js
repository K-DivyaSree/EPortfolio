/* ===================== toggle style switcher ===================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// Hide Style Switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ===================== theme colors ===================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
/* ===================== theme light and dark mode ===================== */
const dayNightButton = document.querySelector(".day-night");
    dayNightButton.addEventListener("click", toggleDarkMode);

        window.addEventListener("load", () => {
            if (localStorage.getItem("darkMode") === "enabled") {
                document.body.classList.add("dark");
                dayNightButton.querySelector("i").classList.add("fa-sun");
            } else {
                document.body.classList.remove("dark");
                dayNightButton.querySelector("i").classList.add("fa-moon");
            }
        });

        function toggleDarkMode() {
            const isDarkModeEnabled = document.body.classList.toggle("dark");
            localStorage.setItem("darkMode", isDarkModeEnabled ? "enabled" : "disabled");

            const icon = dayNightButton.querySelector("i");
            icon.classList.toggle("fa-sun", isDarkModeEnabled);
            icon.classList.toggle("fa-moon", !isDarkModeEnabled);
        }
