const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('is-active');
  menuButton.classList.toggle('is-active');

  if (menu.classList.contains('is-active')) {
    menu.style.transform = 'translateX(0)';
  } else {
    menu.style.transform = 'translateX(-100%)';
  }
}
