/*Kód pro následování podsvícení kurzoru a samotného vlastního kurzoru 
a také pro změnu barvy vlastního kurzoru při najetí na interaktovatelný prvek*/

const Cursor = document.getElementById("cursor");
const HeropageBackground = document.getElementById("HeropageBackground");

/*Vypnutí kurzoru a podsvícení na dotykových zařízení*/
if (navigator.maxTouchPoints > 2) {
    Cursor.style.display = "none"
    HeropageBackground.style.display = "none"
}

window.addEventListener("pointermove", (evnt) => {
    const xcursor = evnt.clientX;
    const ycursor = evnt.clientY;
    
    Cursor.style.transform = `translate(${xcursor}px, ${ycursor}px) translate(-50%, -50%)`;
    
    HeropageBackground.style.transform = `translate(${xcursor}px, ${ycursor}px) translate(-50%, -50%)`;
    
    if (evnt.target.closest("A, input, button, textarea")) {
        Cursor.classList.add("hovering");
        HeropageBackground.classList.add("hovering");
    }
    else
    {
       Cursor.classList.remove("hovering"); 
       HeropageBackground.classList.remove("hovering");
    }
});