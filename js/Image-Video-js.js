let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

let slideIndexDown = 1;
showSlidesDown(slideIndexDown);

// Next/previous controls
function plusSlidesDown(n) {
    showSlidesDown(slideIndexDown += n);
}

// Thumbnail image controls
function currentSlideDown(n) {
    showSlidesDown(slideIndexDown = n);
}


function showSlidesDown(n) {
    let i;
    let slidesDown = document.getElementsByClassName("mySlidesDown");
    let dotsDown = document.getElementsByClassName("dotDown");
    if (n > slidesDown.length) {slideIndexDown = 1}
    if (n < 1) {slideIndexDown = slidesDown.length}
    for (i = 0; i < slidesDown.length; i++) {
        slidesDown[i].style.display = "none";
    }
    for (i = 0; i < dotsDown.length; i++) {
        dotsDown[i].className = dotsDown[i].className.replace(" active", "");
    }
    slidesDown[slideIndexDown-1].style.display = "block";
    dotsDown[slideIndexDown-1].className += " active";
}

// for third one with same code but class's and names changed 
let slideIndexDownThird = 1;
showSlidesDownThird(slideIndexDownThird);

// Next/previous controls
function plusSlidesDownThird(n) {
    showSlidesDownThird(slideIndexDownThird += n);
}

// Thumbnail image controls
function currentSlideDownThird(n) {
    showSlidesDownThird(slideIndexDownThird = n);
}


function showSlidesDownThird(n) {
    let i;
    let slidesDownThird = document.getElementsByClassName("mySlidesDownThird");
    let dotsDownThird = document.getElementsByClassName("dotDownThird");
    if (n > slidesDownThird.length) {slideIndexDownThird = 1}
    if (n < 1) {slideIndexDownThird = slidesDownThird.length}
    for (i = 0; i < slidesDownThird.length; i++) {
        slidesDownThird[i].style.display = "none";
    }
    for (i = 0; i < dotsDownThird.length; i++) {
        dotsDownThird[i].className = dotsDownThird[i].className.replace(" active", "");
    }
    slidesDownThird[slideIndexDownThird-1].style.display = "block";
    dotsDownThird[slideIndexDownThird-1].className += " active";
}
// ends here