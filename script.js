// Gallery Modal Script
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

    // Modal navigation and close
    document.getElementById("prevBtn").addEventListener("click", showPrev);
    document.getElementById("nextBtn").addEventListener("click", showNext);
    document.querySelector(".modal-close").addEventListener("click", closeModal);

    // Optional: Close modal on outside click
    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });

    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("active");
        hamburger.classList.toggle("open");
        document.body.classList.toggle("sidebar-open"); // Prevent scroll
    });

    overlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
        hamburger.classList.remove("open");
        document.body.classList.remove("sidebar-open");
    });

    // Close sidebar when nav link is clicked
    function sidebarNavClose() {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
        hamburger.classList.remove("open");
        document.body.classList.remove("sidebar-open");
    }
});