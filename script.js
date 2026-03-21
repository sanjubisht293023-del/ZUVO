document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash-screen");
    const main = document.getElementById("main-content");

    setTimeout(() => {
        splash.classList.add("fade-out");

        setTimeout(() => {
            splash.style.display = "none";
            main.classList.remove("hidden");
        }, 500);

    }, 2000);
});
