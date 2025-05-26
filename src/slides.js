async function loadSlides() {
    // Request all slides.
    // Max number of slides is 100.
    let i = 1;
    while (i <= 100 && status) {
        await pushSlide(slides, i);
        i++;
    }
    // Display the first slide after all slides loaded.
    displaySlide(0);
}

async function pushSlide(slides, n) {
    // Fetch a slide and push to array.
    // If result not ok, stop looking for more slides.
    await fetch("http://localhost:8888/slides/" + n + ".html")
        .then((res) => {
            if (res.ok) {
                return res.text();
            }
            status = false;
            return false;
        })
        .then((text) => {
            if (text) {
                slides.push(text);
            }
        })
        .catch((e) => console.log(e))
}

function toggleToolbar() {
    tb = document.getElementById("toolbar");
    if (toolbarHidden) {
        tb.style["height"] = "5%";
        slide.style["height"] = "95%";
        buttonPrevious.hidden = false;
        buttonNext.hidden = false;
        buttonFullscreen.hidden = false;
        toolbarHidden = false;
    } else {
        tb.style["height"] = 0;
        slide.style["height"] = "100%";
        buttonPrevious.hidden = true;
        buttonNext.hidden = true;
        buttonFullscreen.hidden = true;
        toolbarHidden = true;
    }
}


const slides = [];
let status = true;
let toolbarHidden = false;

loadSlides();
