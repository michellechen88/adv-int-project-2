document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".scroll-section");

    // Apply a random blur to each section initially
    sections.forEach(section => {
        const randomBlur = Math.random() * 10 + 5; // Random blur between 5px and 15px
        section.style.filter = `blur(${randomBlur}px)`; 
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the blur effect and apply the fade-in effect
                entry.target.classList.add("show");
                entry.target.style.filter = 'blur(0px)';
                observer.unobserve(entry.target); // Stop observing once it appears
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
