const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  if (window.scrollY > 300) {
    // ボタンを表示する処理
    backToTopButton.style.display = 'block';

    // 0.01 秒後にボタンを表示する
    setTimeout(() => {
      backToTopButton.style.opacity = '1';
    }, 10);
  } else {
    // ボタンを非表示にする処理
    backToTopButton.style.opacity = '0';

    // 0.3 秒後にボタンを非表示にする
    setTimeout(() => {
      backToTopButton.style.display = 'none';
    }, 300);
  }
}

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
