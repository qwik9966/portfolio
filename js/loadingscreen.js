/*Kód pro načítácí menu*/

const MainPage = document.getElementById("mainpage");
const LoadingPage = document.getElementById("loadingpage");
const QuickLoad = true;

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

dot1.classList.add("dot-active");


/*Načítací stránka se zobrazí pouze když uživatel ve stejném tabu nikdy neotevřel stránku*/
if (sessionStorage.getItem("hasVisited")) {
    dot1.classList.remove("dot-active");
    LoadingPage.classList.add("loadingpage-active");
    MainPage.style.display = "block";
    LoadingPage.style.display = "none";
    
    /*Oprava AOS*/
    function StartAOS() {
        AOS.init({
            duration: 800,
        });
    
        AOS.refresh();
    
        window.dispatchEvent(new Event('resize'));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', StartAOS);
        StartAOS();
    }
}
else {
    /*Načítací stránka*/
    setTimeout(function() {
        dot2.classList.add("dot-active");
        dot1.classList.remove("dot-active");
    }, 750);

    setTimeout(function() {
        dot3.classList.add("dot-active");
        dot2.classList.remove("dot-active");
    }, 1500);

    setTimeout(function(){
        LoadingPage.classList.add("loadingpage-active");
        MainPage.style.display = "block";
        AOS.init({});
    }, 2250);

    setTimeout(function(){
        LoadingPage.style.display = "none";
    }, 2750);
    
    sessionStorage.setItem("hasVisited", "true");
}