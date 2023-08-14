
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




// --------Gsap Codes---------

function headingAnimations() {

    tl = gsap.timeline()

    gsap.from(".nav", {
        y: 30,
        opacity: 0,
        delay: .5,
        duration: 0.8,
    })


    gsap.to("#boundingElement_one, #boundingElement_two", {
        y: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.3,
        scrub: 3,
    })

    gsap.from(".footer-heading", {
        opacity: 0,
        delay: 1.5,
        duration: 0.3,
    })


}

headingAnimations()


// ------------Shrinking Mouse div-------------

var timeout;


function mouseMoveShrink() {

    var xprev = 0;
    var yprev = 0;

    window.addEventListener('mousemove', dets => {
        // console.log(dets.clientX, dets.clientY)

        clearTimeout(timeout)
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        if (xdiff < 0.8) {
            xdiff = 0.8;
        }
        else if (xdiff > 1.2) {
            xdiff = 1.2;
        }

        if (ydiff < 0.8) {
            ydiff = 0.8;
        }
        else if (ydiff > 1.2) {
            ydiff = 1.2;
        }


        xprev = dets.clientX;
        yprev = dets.clientY;


        mouseMoveCircle(xdiff, ydiff);

        timeout = setTimeout(() => {
            circle = document.querySelector(".minicircle")
            circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        }, 100)
    })
}

mouseMoveShrink();

// --------Code for MouseMove Circle--------

function mouseMoveCircle(xscale, yscale) {
    window.addEventListener("mousemove", (dets) => {
        circle = document.querySelector(".minicircle");
        circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`

    })
}

mouseMoveCircle();


// -------------Image Moving Animation---------------




document.querySelectorAll(".box").forEach(box => {

    var rotateVal = 0;
    var prevClientX = 0;

    // var bigCircle = document.querySelector(".bigcircle");

    box.addEventListener("mouseleave", () => {

        // bigCircle.style.opacity = "0";
        image = box.querySelector("img");

        gsap.to(image, {
            opacity: 0,
        })
    })

    box.addEventListener("mousemove", dets => {


        // bigCircle.style.opacity = "1";

        // bigCircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;

        var image = box.querySelector("img")
        var imght = image.offsetHeight / 2;
        var imgwd = image.offsetWidth / 2
        var topDiff = dets.clientY - box.getBoundingClientRect().top - imght;
        var leftDiff = dets.clientX - box.getBoundingClientRect().left - imgwd;

        rotateVal = dets.clientX - prevClientX;
        prevClientX = dets.clientX
        rotateVal = gsap.utils.clamp(-10, 10, rotateVal);

        gsap.to(image, {
            opacity: 1,
            top: topDiff,
            left: leftDiff,
            rotate: rotateVal,
        })
    })
})



// ---------------Menu Click Function-----------------

const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {

    gsap.to(".nav-items h1", {
        opacity:1,
        y: 0,
        stagger: 0.05,
    })

    gsap.to(".nav-items", {
        zIndex: 1,
    })

    gsap.to("#menu", {
        y: 30,
        opacity: 0,
        duration: 0.5,
    })
})
