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
      accItem.querySelector('.accordion-header');
    }
  });

  // 現在のアイテムの状態を切り替え
  item.classList.toggle('active');
  const content = item.querySelector('.accordion-content');

  if (!isActive) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = null;
  }
}
