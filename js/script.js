//menu-btn
const navbar = document.querySelector(".navbar");
        const menuBtn = document.querySelector("#menu-btn");

        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("active");
            document.addEventListener("click", function (e) {
                if (
                    !e.composedPath().includes(menuBtn) &&
                    !e.composedPath().includes(navbar)
                ){
                    navbar.classList.remove("active");
                }
                
            });
        });
 // scroll reveal animation
 ScrollReveal({
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top'});
ScrollReveal().reveal('.box', { origin: 'bottom'});
ScrollReveal().reveal('.row,.left,.hero', { origin: 'left'});
ScrollReveal().reveal('.columns,.right', { origin: 'right'});
    