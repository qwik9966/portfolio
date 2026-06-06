/*Kód pro schovávání hlavičky*/

const Header = document.getElementById("header");

document.addEventListener("scroll", (evnt) => {
    if (window.scrollY >= 200) {
        Header.classList.add("header-hidden");
    }
    else {
        Header.classList.remove("header-hidden");
    }
});