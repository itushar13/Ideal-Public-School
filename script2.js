document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Nav Script for mobile
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Only run if sidebar components exist
    if (hamburger && sidebar && overlay) {
        hamburger.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            overlay.classList.toggle("active");
            hamburger.classList.toggle("open");
            document.body.classList.toggle("sidebar-open");
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("open");
            overlay.classList.remove("active");
            hamburger.classList.remove("open");
            document.body.classList.remove("sidebar-open");
        });

        // Function for closing sidebar when a nav link is clicked
        window.sidebarNavClose = function sidebarNavClose() {
            sidebar.classList.remove("open");
            overlay.classList.remove("active");
            hamburger.classList.remove("open");
            document.body.classList.remove("sidebar-open");
        };
    }
});