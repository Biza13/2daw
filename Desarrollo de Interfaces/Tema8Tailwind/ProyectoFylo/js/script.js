const themeToggle = document.getElementById('theme-toggle')
const moonIcon = document.getElementById('moon-icon')
const sunIcon = document.getElementById('sun-icon')

function test(){
    if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefer-color-scheme:dark)").matches)){
        document.documentElement.classList.add("dark")
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden")
    }else{
        document.documentElement.classList.remove("dark")
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden")
    }
}

document.addEventListener('DOMContentLoaded', test)