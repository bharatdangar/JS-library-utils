/*Add active class on navbar items when clicked For each
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
//https://github.com/typekit/webfontloader > https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js
//https://github.com/typekit/webfontloader#custom
const preloadFonts = (id) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            google: {
                families: ['Droid Sans', 'Droid Serif']
            },
            custom: {
                families: ['My Font', 'My Other Font:n4,i4,n7'],
                //urls: ['/fonts.css']
            },
            active: resolve
        });
    });
};


//If element available 
if(!!el.querySelector(".classname")) {
    // do something
}


//For loop
for (let i = 0; i < 5; i++) {
    // do something
    console.log(i);
}


// Has Class checking
el.classList.contains("active");

// Next Sibling
el.nextElementSibling;

//Get Offset
const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
};
getOffset('.element');


// Outer Height With Margin
const outerHeight = (el) => {
    const height = el.offsetHeight;
    const style = getComputedStyle(el);

    return height + parseInt(style.marginTop) + parseInt(style.marginBottom);
}

// Position
const getPosition = (el) => {
    return {
        top:  el.offsetTop,
        left: el.offsetLeft
    };
}

// Position Relative To Viewport
el.getBoundingClientRect();


// Prepend
const prepend = (parent, el) => {  
    parent.insertBefore(el, parent.firstChild);
}

//Toggle Class  
const toggleClass = (el, className) => { 
    el.classList.toggle(className);
}
