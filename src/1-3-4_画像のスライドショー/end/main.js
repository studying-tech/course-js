const slides = document.getElementsByClassName('slide');
// ここでの dotNavigation の中身は後から作ります
const dotNavigation = document.querySelector('.dot-navigation');
let currentSlide = 0;

// ドットナビゲーションの作成
// <span class="dot"></span> を作成して、 .dot-navigation の子要素として配置
for (let index = 0; index < slides.length; index++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    showSlide(index);
    stopSlideshow();
  });
  dotNavigation.appendChild(dot);
}

const dots = document.getElementsByClassName('dot');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

let slideInterval;
const playPauseButton = document.getElementById('playPause');

function startSlideshow() {
  slideInterval = setInterval(showNextSlide, 3000); // 3秒ごとに次のスライドを表示
  playPauseButton.textContent = '停止';
  playPauseButton.classList.remove('stopped');
}

// 初期状態で自動再生を開始
showSlide(0);
startSlideshow();

function stopSlideshow() {
  clearInterval(slideInterval);
  slideInterval = null;
  playPauseButton.textContent = '再生';
  playPauseButton.classList.add('stopped');
}

function togglePlayPause() {
  if (slideInterval) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

playPauseButton.addEventListener('click', togglePlayPause);

document.getElementById('nextSlide').addEventListener('click', () => {
  showNextSlide();
  stopSlideshow();
});

document.getElementById('prevSlide').addEventListener('click', () => {
  showPreviousSlide();
  stopSlideshow();
});
