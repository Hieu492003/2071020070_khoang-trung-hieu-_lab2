// Chờ HTML tải xong trước khi thực thi mã JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lắng nghe sự kiện gửi form ở trang contact.html
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Ngăn chặn trang web tải lại mặc định
            e.preventDefault();
            
            // Lấy giá trị từ các ô nhập liệu
            const name = document.getElementById('name').value;
            
            // Hiển thị thông báo cảm ơn
            alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi thành công.`);
            
            // Xóa dữ liệu đã nhập trong form
            contactForm.reset();
        });
    }

    // 2. Thêm hiệu ứng highlight cho menu trang hiện tại
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.fontWeight = 'bold';
            link.style.color = '#007bff';
        }
    });

}); 