document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-in');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
