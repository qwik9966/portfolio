/*Kód pro opravení načítání AOS.*/

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