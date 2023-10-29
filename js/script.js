const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("menu-visible");
        menuToggle.classList.toggle("open");
    });

document.addEventListener("DOMContentLoaded", function() {
    const miAudio = document.getElementById("miAudio");
    miAudio.volume = 0.2;
});