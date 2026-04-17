let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    index++;

    if (index > slides.length) {
        index = 1;
    }

    slides[index - 1].classList.add("active");
    setTimeout(showSlides, 3000);
}

showSlides();