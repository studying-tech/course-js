const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';

    setTimeout(() => {
      backToTopButton.style.opacity = '1';
    }, 10);
  } else {
    backToTopButton.style.opacity = '0';

    setTimeout(() => {
      backToTopButton.style.display = 'none';
    }, 300);
  }
}

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
