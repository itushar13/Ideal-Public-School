
document.addEventListener("DOMContentLoaded", () => {
    // === Gallery Modal Script ===
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const images = Array.from(document.querySelectorAll(".gallery-img"));
    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modalImage.src = images[currentIndex].src;
        modal.style.display = "flex";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentIndex].src;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.src = images[currentIndex].src;
    }

    images.forEach((img, index) => {
        img.addEventListener("dblclick", () => openModal(index));
    });


});

