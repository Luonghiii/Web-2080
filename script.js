const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((i) => i.classList.remove('active'));
    item.classList.add('active');
  });
});

const memories = document.querySelectorAll('.memory-card');
memories.forEach((card) => {
  card.addEventListener('click', () => {
    memories.forEach((m) => m.classList.remove('active'));
    card.classList.add('active');
  });
});
