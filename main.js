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



//Font and images loader 
import imagesLoaded from 'imagesloaded';
import FontFaceObserver from 'fontfaceobserver';

/**
 * * load necessary things first
 */
const fontOpen= new Promise(resolve => {
    new FontFaceObserver("Open Sans").load().then(()=>{
        resolve()
    })
})

const fontPlayFair = new Promise(resolve => {
    new FontFaceObserver('Playfair Display').load().then(()=>{
        resolve()
    })
})

const preLoadedImgs = new Promise( resolve => {
    imagesLoaded(document.querySelectorAll('img'), { background: true } , resolve)
})

let alldone = [fontOpen, fontPlayFair, preLoadedImgs]

Promise.all(alldone).then(()=>{
    /**
     * * recall methods
     */
    console.log("Hello")
})


//Smooth Scroll 
body,
  html {
    overscroll-behavior: none;
    background-color: #000000;
    height: 100vh;
    width: 100%;
  }
  
  main {
    position: fixed;
    width: 100%;
    height: 100vh;
  }
  
  .scrollable {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    
    will-change: transform;
  }

let scrollable = document.querySelector('.scrollable');

let current = 0;
let target = 0;
let ease = 0.055;

// Linear inetepolation used for smooth scrolling and image offset uniform adjustment
function lerp(start, end, t){
    return start * (1 - t ) + end * t;
}

// init function triggered on page load to set the body height to enable scrolling and EffectCanvas initialised
function init(){
    document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
}

// translate the scrollable div using the lerp function for the smooth scrolling effect.
function smoothScroll(){
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollable.style.transform = `translate3d(0,${-current}px, 0)`;
}
init()
smoothScroll()
