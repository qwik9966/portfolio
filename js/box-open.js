/*Kód pro otevírání boxů na podstránce média*/

const boxes = document.querySelectorAll('.media-box');

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (!box.classList.contains("disabled") || window.innerWidth <= 900) {
            box.classList.toggle("active");
        }
    });
});