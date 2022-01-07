/*Add active class on navbar items when clicked 
===========================================================*/
const navbar = document.querySelector(".navbar");
const navbarItems = navbar.querySelectorAll("li");
//console.log(navbar, navbarItems);

navbarItems.forEach(item => {
    item.addEventListener("click", function() {
        navbarItems.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});


// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;


// lerp Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;


// Gets the mouse position
const getMousePos = e => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};



// Preload images using Imagesloaded plugin
//const imagesLoaded = require('imagesloaded');
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};


// Preload Fonts using WebFont Loader
const preloadFonts = (id) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};