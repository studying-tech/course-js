const parallaxElements = document.querySelectorAll('.parallax');
let ticking = false;

function initParallax() {
  parallaxElements.forEach((element) => {
    element.style.transform = 'translateY(0)';
  });
}

function applyParallax() {
  const scrollPosition = window.scrollY;

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed;
    const yPos = -(scrollPosition * speed);
    element.style.transform = 'translateY(' + yPos + 'px)';
  });
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      applyParallax();
      ticking = false;
    });
    ticking = true;
  }
});

initParallax();
