window.addEventListener("DOMContentLoaded", () => {
    let span = document.querySelector("span#year");
    let today = new Date();
    let year = today.getFullYear();
    span.textContent = year;
});