const menuItems = document.querySelectorAll('.menu-item');
const sectionPanels = document.querySelectorAll('.section-panel');

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((i) => i.classList.remove('active'));
    item.classList.add('active');

    const target = item.dataset.target;
    sectionPanels.forEach((panel) => {
      const sections = panel.dataset.section.split(' ');
      panel.classList.toggle('hidden', !sections.includes(target));
    });

    showToast(`Đã chuyển sang mục: ${item.textContent.trim()}`);
  });
});

const memories = document.querySelectorAll('.memory-card');
const memoryDetails = document.getElementById('memoryDetails');
memories.forEach((card) => {
  card.addEventListener('click', () => {
    memories.forEach((m) => m.classList.remove('active'));
    card.classList.add('active');
    memoryDetails.querySelector('h4').textContent = card.dataset.memoryTitle;
    memoryDetails.querySelector('p').textContent = card.dataset.memoryText;
  });
});

const notifyDrawer = document.getElementById('notifyDrawer');
document.getElementById('notifyBtn').addEventListener('click', () => {
  notifyDrawer.classList.toggle('hidden');
});

document.getElementById('helpBtn').addEventListener('click', () => {
  showToast('Hỗ trợ AI: Bạn có thể chọn mục bên trái để mở tính năng tương ứng.');
});

document.getElementById('brainConnectBtn').addEventListener('click', () => {
  showToast('Đã khởi tạo kết nối thần kinh an toàn.');
});

document.getElementById('recordMemoryBtn').addEventListener('click', () => {
  showToast('Bắt đầu phiên ghi ký ức mới (demo).');
});

const chatModal = document.getElementById('chatModal');
const openChat = () => chatModal.classList.remove('hidden');
document.getElementById('openChatBtn').addEventListener('click', openChat);
document.getElementById('quickChatBtn').addEventListener('click', openChat);
document.getElementById('closeChatBtn').addEventListener('click', () => {
  chatModal.classList.add('hidden');
});

const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  const userMsg = document.createElement('p');
  userMsg.innerHTML = `<b>Bạn:</b> ${text}`;
  chatMessages.appendChild(userMsg);

  const botMsg = document.createElement('p');
  botMsg.innerHTML = '<b>ECHO:</b> Mình đã ghi nhận nội dung này vào hồ sơ di sản của bạn.';
  chatMessages.appendChild(botMsg);

  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatForm.reset();
});

document.getElementById('securityBtn').addEventListener('click', () => {
  document.querySelector('.menu-item[data-target="security"]').click();
});

document.getElementById('settingsForm').addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Đã lưu cài đặt hệ thống thành công.');
});

chatModal.addEventListener('click', (event) => {
  if (event.target === chatModal) {
    chatModal.classList.add('hidden');
  }
});
