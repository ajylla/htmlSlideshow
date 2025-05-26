function displaySlide(i) {
    // Display ith slide.
    if (i < 0 || i > slides.length-1) {
        i = 0;
    }
    slide.innerHTML = slides[i];
    currentSlide = i;
}

function changeSlide(by) {
    // Change slide by some delta index.
    displaySlide(currentSlide+by);
}

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowLeft": 
            changeSlide(-1);
            break;
        case "ArrowRight":
            changeSlide(1);
            break;
        case "ArrowDown":
            toggleToolbar();
            break;
    }
});

let currentSlide = 0;
