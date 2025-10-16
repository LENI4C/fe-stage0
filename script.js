document.addEventListener("DOMContentLoaded", function () {
    // Get the time element
    const timeElement = document.querySelector(
        '[data-testid="test-user-time"]'
    );

    if (timeElement) {
        // Function to update the current time in milliseconds
        function updateTime() {
            const currentTime = Date.now();
            timeElement.textContent = `Current time: ${currentTime} ms`;
        }

        // Update time immediately
        updateTime();

        // Update time every second to keep it relatively current
        // (This ensures the time stays reasonably accurate without being too frequent)
        setInterval(updateTime, 1000);
    }


    // Add keyboard navigation support for better accessibility
    const socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach((link) => {
        link.addEventListener("keydown", function (e) {
            // Allow Enter and Space to activate the link
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Add focus management for better accessibility
    const focusableElements = document.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
    );

    // Add visible focus indicators
    focusableElements.forEach((element) => {
        element.addEventListener("focus", function () {
            this.style.outline = "2px solid #667eea";
            this.style.outlineOffset = "2px";
        });

        element.addEventListener("blur", function () {
            this.style.outline = "";
            this.style.outlineOffset = "";
        });
    });

    // Log current time for debugging/testing purposes
    console.log("Profile Card loaded at:", Date.now(), "ms");
});

