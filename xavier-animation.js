const xavier = document.querySelector(".xavier");
const navbar = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");
const headtext = document.querySelector(".headText");
const section1 = document.querySelector(".first")

xavier.addEventListener("click", () => {
    navbar.classList.toggle("open");
    headtext.classList.toggle("hidden");
    headtext
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})