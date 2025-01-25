const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

function toggleMenu() {
  menu.classList.toggle('is-active');
  menuButton.classList.toggle('is-active');
}

menuButton.addEventListener('click', toggleMenu);
