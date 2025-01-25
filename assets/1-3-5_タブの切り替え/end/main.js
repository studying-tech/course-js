const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

tabItems.forEach((tab) => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');
    switchTab(tabId);
  });
});

function switchTab(tabId) {
  tabItems.forEach((item) => {
    const isActive = item.getAttribute('data-tab') === tabId;
    item.classList.toggle('active', isActive);
  });

  tabContents.forEach((content) => {
    const isActive = content.id === tabId;
    content.classList.toggle('active', isActive);
  });
}

// 初期状態のタブを設定
switchTab('tab1');
