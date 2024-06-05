const menuBtn = document.querySelector(".menuBtn");
const links = document.querySelector(".links");
const menuIcon = document.querySelector(".menuBtn i");

menuBtn.addEventListener("click", function () {
    links.classList.toggle("show-links");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
})