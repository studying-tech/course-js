window.addEventListener('resize', function () {
  console.log('ウィンドウサイズ変更: ' + window.innerWidth + 'x' + window.innerHeight);
});

window.addEventListener('scroll', function () {
  console.log('スクロール位置: ' + window.scrollX + 'px, ' + window.scrollY + 'px');
});
