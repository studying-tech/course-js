const accordionItems = document.querySelectorAll('.accordion-item');
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    toggleAccordion(item);
  });
});

function toggleAccordion(item) {
  const isActive = item.classList.contains('active');

  // 他のすべてのアイテムを閉じる
  accordionItems.forEach((accItem) => {
    if (accItem !== item) {
      accItem.classList.remove('active');
      accItem.querySelector('.accordion-content').style.maxHeight = null;
    }
  });

  // isActive の定義前に toggle すると、実際の結果とは逆になってしまうので注意
  item.classList.toggle('active');

  // 要素は item の中から探す
  const content = item.querySelector('.accordion-content');

  if (!isActive) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = null;
  }
}
