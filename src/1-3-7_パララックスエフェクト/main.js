let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      applyParallax();
      ticking = false;
    });
    ticking = true;
  }
});

const parallaxElements = document.querySelectorAll('.parallax');

function initParallax() {
  parallaxElements.forEach((element) => {
    element.style.transform = 'translateY(0)';
  });
}

initParallax();

function applyParallax() {
  const scrollPosition = window.scrollY;

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed;
    const yPos = -(scrollPosition * speed);
    element.style.transform = 'translateY(' + yPos + 'px)';
  });
}
