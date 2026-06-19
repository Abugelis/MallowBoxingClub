const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const closeBtn = document.getElementById("close");

let currentIndex = 0;

// open image
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.style.display = "flex";
    updateImage();
}

function updateImage() {
    lightboxImg.src = images[currentIndex].src;
}

// next / prev
nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// close
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// keyboard support
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "Escape") lightbox.style.display = "none";
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "ArrowLeft") prevBtn.click();
    }
});