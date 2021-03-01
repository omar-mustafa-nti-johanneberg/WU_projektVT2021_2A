const lines = document.querySelector(".lines")
const nav = document.querySelector(".nav-links")

function toggleMeny() {
    nav.classList.toggle("nav-active")
    lines.classList.toggle("toggle")
}

lines.addEventListener("click", toggleMeny)