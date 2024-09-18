function smoothScrollTo(target, duration) {
    const start = window.scrollY;
    const targetElement = document.querySelector(target);
    const end = targetElement.offsetTop;
    const distance = end - start;
    const startTime = performance.now();

    function scroll() {
        const now = performance.now();
        const elapsed = (now - startTime) / duration;
        const progress = Math.min(elapsed, 1);
        const ease = easeInOutQuad(progress);

        window.scrollTo(0, start + distance * ease);

        if (progress < 1) {
            requestAnimationFrame(scroll);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    scroll();
}

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        smoothScrollTo(targetId, 2000);
    });
});