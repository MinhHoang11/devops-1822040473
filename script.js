// Hiển thị lời chào theo buổi và thời gian truy cập khi bấm nút
const btn = document.getElementById('btn');
const message = document.getElementById('message');

function loiChao() {
  const gio = new Date().getHours();
  if (gio < 12) return 'Chào buổi sáng';
  if (gio < 18) return 'Chào buổi chiều';
  return 'Chào buổi tối';
}

btn.addEventListener('click', () => {
  const thoiGian = new Date().toLocaleString('vi-VN');
  message.textContent = `${loiChao()}! Bạn truy cập lúc ${thoiGian}.`;
});

console.log('Website DevOps của Phan Minh Hoàng đã sẵn sàng.');
