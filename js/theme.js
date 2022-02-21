const btn = document.querySelector(".btn-toggle");
const btnLight = document.querySelector("#light_mode");
const btnDark = document.querySelector("#dark_mode");

const darkThemeBtn = () => {
    document.body.classList.add("dark-theme");
    btnLight.style.display = "block";
    btnDark.style.display = "none";
    localStorage.setItem("theme", "dark");
}
const lightThemeBtn = () => {
    document.body.classList.remove("dark-theme");
    btnDark.style.display = "block";
    btnLight.style.display = "none";
    localStorage.setItem("theme", "light");
}
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    darkThemeBtn();
} else {
    lightThemeBtn();
}

btn.addEventListener("click", function () {
    if (localStorage.getItem("theme") === "light") {
        darkThemeBtn();
    }
    else {
        lightThemeBtn();
    }
});