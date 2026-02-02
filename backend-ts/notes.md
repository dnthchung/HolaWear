Trong `nodemon.json`, `exec: "tsx src/server.ts NODE_ENV=dev"` không hoạt động trên Windows PowerShell vì `NODE_ENV=dev` không được đặt như biến môi trường. Sửa bằng cách đặt biến môi trường trong `nodemon.json`:

cập nhật `nodemon.json` để đặt biến môi trường đúng cách.

**Vấn đề:**

- Trên Windows PowerShell, `NODE_ENV=dev` trong `exec` không hoạt động như trên Linux/Mac
- PowerShell coi `NODE_ENV=dev` là argument của `tsx`, không phải biến môi trường

**Giải pháp:**

- Dùng `env` trong `nodemon.json` để đặt biến môi trường
- Cách này hoạt động trên Windows, Linux và Mac

Chạy lại `npm run dev` hoặc `npx nodemon` để xem log. Nếu vẫn không có log, kiểm tra:

1. File `.env` có tồn tại không
2. MongoDB có đang chạy không (nếu cần kết nối DB)
3. Các biến môi trường trong `.env` đã được cấu hình đúng

Nếu vẫn lỗi, gửi thông báo lỗi cụ thể để xử lý tiếp.

---

Request → Controller → Service → ShopRepository → BaseRepository → dbManager → MongoDB
