document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let currentTestimonial = 1;
    const totalTestimonials = 4; // Set this to the total number of testimonials you have

    setInterval(() => {
        // Hide the current testimonial
        document.getElementById(`testimonial${currentTestimonial}`).style.display = 'none';

        // Increment the testimonial index or reset to 1 if it's the last testimonial
        currentTestimonial = currentTestimonial < totalTestimonials ? currentTestimonial + 1 : 1;

        // Show the next testimonial
        document.getElementById(`testimonial${currentTestimonial}`).style.display = 'inline-flex';
    }, 3000); // Change testimonial every 3 seconds
});

document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll('.feature');

    features.forEach(feature => {
        feature.addEventListener('mouseover', () => {
            features.forEach(f => {
                if (f !== feature) {
                    f.style.transform = 'scale(0.9)'; // Shrink other features
                }
            });
        });

        feature.addEventListener('mouseout', () => {
            features.forEach(f => f.style.transform = 'scale(1)'); // Reset scale on mouse out
        });
    });
});