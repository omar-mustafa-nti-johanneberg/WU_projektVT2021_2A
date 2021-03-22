const lines = document.querySelector(".lines")
const links = document.querySelector(".mobil-links")

function toggleMeny() {
    lines.classList.toggle("toggle")
    links.classList.toggle("nav-active")
}

lines.addEventListener("click", toggleMeny)