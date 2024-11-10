# HolaWear

## SDN301m Project - SE1740-NJ

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Menu

- [Roles](#roles)
- [Database Setup](#database-setup)
- [Back End](#back-end)
- [Front End](#front-end)

### Roles

- **Admin**: Manages the entire system, oversees users and sellers, and handles high-level administration tasks.
- **Seller**: Manages their own products, sales, and related operations.
- **User**: Regular customers who browse, purchase products, and manage their personal account.

### Database Setup

- Use the JSON files located in the `db` folder to import data into your local database.

<!-- ====================================== BACK END =============================== -->

### Back End

<details>
<summary><strong>Folder Structure</strong></summary>

- `npm i`

- `npm start` - http://localhost:9999/

```plaintext

    └── backend/
        ├── controllers/
        │   ├── index.js
        │   ├── authController.js
        │   ├── userController.js
        │   └── ...
        ├── middlewares/
        │   ├── verifySignUp.js
        │   ├── verifyJWT.js
        │   └── ...
        ├── models/
        │   ├── index.js
        │   ├── user.model.js
        │   ├── role.model.js
        │   └── ...
        ├── node_modules
        ├── routes/
        │   ├── index.js
        │   ├── authRoute.js
        │   ├── userRoute.js
        │   └── ...
        ├── .env
        ├── .prettierrc
        ├── note BE.txt
        ├── package-lock.json
        ├── package.json
        └── server.js

```

</details>

<!-- ====================================== FRONT END =============================== -->

### Front End

<details>
<summary><strong>Folder Structure</strong></summary>

- `npm i`

- `npm run dev` - http://localhost:5173/

```plaintext

    └── frontEnd/
        ├── public
        ├── src/
        │   ├── assets
        │   ├── axios
        │   ├── components/
        │   │   ├── ui/
        │   │   │   ├── accordion.jsx
        │   │   │   ├── badge.jsx
        │   │   │   ├── button.jsx
        │   │   │   └── ...
        │   │   └── admin/
        │   │       ├── formAddProduct.jsx
        │   │       ├── tableProduct.jsx
        │   │       ├── tableUser.jsx
        │   │       └── ...
        │   ├── lib
        │   ├── pages/
        │   │   ├── admin/
        │   │   │   ├── dashboard.jsx
        │   │   │   ├── manageProduct.jsx
        │   │   │   └── ...
        │   │   ├── seller
        │   │   ├── auth/
        │   │   │   ├── login.jsx
        │   │   │   ├── register.jsx
        │   │   │   └── ...
        │   │   ├── error/
        │   │   │   └── notFoundPage.jsx
        │   │   └── main/
        │   │       ├── home.jsx
        │   │       ├── cart.jsx
        │   │       └── ...
        │   ├── app.jsx
        │   ├── app.scss
        │   ├── index.scss
        │   └── index.jsx
        ├── .prettierrc
        ├── .gitignore
        └── components.json

```

</details>




- ok - thêm chỉnh sửa giá tiền cho từng product
- ok -  thêm ghi chú ở quản lý product là : chỉ sản phẩm nào có trạng thái là "In Stock" + có "Color - có số lượng để bày bán" mới show ra ngoài
- ok - chỉnh sử FE show product list data như trên
- chính ưuả lại product details FE(slider ảnh) và logic hiển thị color và size cũng như số lượng người mua có thể lựa chọn
- ok -haonf thiện chức năng thêm 1 sản phẩm vào giỏ hngà



- ok - thêm code kiểm tra, MUÓN THÊM SẢN PHẨM VÀO GIỎ HÀNG THì sản phẩm phải đang còn hàng
- pending-  thêm code ở cart nếu san rphẩm hết hàng hoặc không hạot động thì không cho người dùng thanh toán sản phẩm đó
- ok - Code giao diện quản lý đơn hàng cho người dùng
- Code giao diện quản lý order cho admin/seller
	+ Get all orders by user ID: Retrieve all orders for a specific user.
	+ Get all users: Retrieve all users in the system (for admin/seller).
	+ Approve order: Admin/seller changes the status of an order from pending to shipped.
	+ Cancel order: User can cancel their order. 
	+ Cancel user order ( role seller)
	+ User payment: User marks the order as completed after payment.

	- checkout thành công thì trừ số lượng cảu product đi
	- hủy ơnt hì cộng lại sản phẩm vào


        - Display a list of orders made by the user
        - Dropdown lọc order theo 4 trạng thái "pending", "completed", "shipped", "cancelled"
        - dùng dialog để hiện chi tiết order khi click vào 1 order
        - Có Button để lựa chọn hủy 1 order và alert dialog để xác nhận hủy order
        - Có button để xác nhận đã nhận hàng và alert dialog để xác nhận đã nhận hàng


- sưaả code import excel product - phần hình ảnh, tách ra thành các image 1 2 3, sau đó mới gộp lại thành 1 mảng
- thêm option tìm sản phẩm theo ngày tạo ( dùng date picker)





- ok - tạo cart ngay khi đăng ký thành công
- ok -sửa cập nhật lại stock cho product khi ship đơn hoặc hủy đơn
- ok - modify định dạng tiền cho product 
- ok - chỉ cho import file excel khi import
- ok - nếu delivery address ở checkout screen rỗng thì show button chuyển hướng đến thêm ship address và mess thông báo null address
- ok - quên mk với mail , các thao tác với mail 

- ok - sửa thumbnail trong cart / order phải đúng với màu cảu sản phẩm
- import depot số lượng lớn bằng excel

- seller tạo báo cáo
- thêm date filter range cho seller order

- người dùng đánh giá sản phẩm.

- ok - thêm bên cạnh men vs women all product từ home

- Quản lý phần tử ở trang home

- Tạo tài khoản seller cho admin

- ok - chỗ depot ở orderr đúng màu

- fix login, tài khoản nào status = false thì khong cho login

- đăng ký acc mới xong thì cho gửi mail thông báo dki thành công
- sned mail sau khi tạo thành công order

- chỉ cho phép file .xlsx, còn file loại khác không cho 
- import 1 số trường cần thôi, mấy thằng default thì ko cần excel
- dùng pahanf thứ 3 để store ảnh ( tải lên từ local và ảnh lấy link)

- sp basn chạy / chiến dịch , trừ sl sp trong kho (noti cho ad)
- đơn khi dc lập - cần 


- làm cái thông báo - về cái report - report của user về đơn hàng hoặc về sản phẩm lên cho hệ thống - xong bên seller có thể phản hồi user thông qua mail về report đó ( phải làm kỹ chỗ report)
- chỗ checkout cái giá total và sl sp đặt hàng

- seller xem sp ế nhất => phupwng án giải quyết => cái này lieenq uan đến việc tạo các bộ sưu tập quần áo, coupone giảm giá các dịp đặc biệt => marketing
- admin tạo tài khoản seller
- admin chỉnh sửa custom thông tin header footer home



======
### Công việc đã hoàn thành (ok)

1. **Chỉnh sửa giá tiền cho từng product**
2. **Thêm ghi chú ở quản lý product**: chỉ sản phẩm nào có trạng thái là "In Stock" + có "Color - có số lượng để bày bán" mới show ra ngoài.
3. **Chỉnh sửa FE**: show product list data như trên.
4. **Chỉnh sửa product details FE**: slider ảnh và logic hiển thị color và size cũng như số lượng người mua có thể lựa chọn.
5. **Hoàn thiện chức năng thêm sản phẩm vào giỏ hàng**.
6. **Thêm code kiểm tra**: muốn thêm sản phẩm vào giỏ hàng thì sản phẩm phải đang còn hàng.
7. **Code giao diện quản lý đơn hàng cho người dùng**.
8. **Checkout thành công** thì trừ số lượng của product đi.
9. **Hủy đơn** thì cộng lại sản phẩm vào kho.
10. **Tạo cart ngay khi đăng ký thành công**.
11. **Cập nhật lại stock cho product khi ship đơn hoặc hủy đơn**.
12. **Modify định dạng tiền cho product**.
13. **Chỉ cho import file excel khi import**.
14. **Nếu delivery address ở checkout screen rỗng thì show button chuyển hướng đến thêm ship address và mess thông báo null address**.
15. **Quên mật khẩu với mail**: các thao tác với mail.
16. **Sửa thumbnail trong cart/order** phải đúng với màu của sản phẩm.
17. **Thêm bên cạnh men vs women all product từ home**.
18. **Tạo tài khoản seller cho admin**.
19. **Fix login**: tài khoản nào status = false thì không cho login.
20. **Đăng ký acc mới xong thì cho gửi mail thông báo đăng ký thành công**.
21. **Send mail sau khi tạo thành công order**.
22. **Chỉ cho phép file .xlsx**: các file loại khác không cho phép.
23. **Import một số trường cần thôi**: mấy trường default thì không cần excel.
24. **Sử dụng phần thứ 3 để store ảnh**: tải lên từ local và ảnh lấy link.

### Công việc đang thực hiện hoặc cần làm
0. **Sửa product model**: thêm mỗi sản phẩm 1 mã code định danh các chữ in hoa + các số (mã sản phẩm) : length : 6
1. **Thêm code**: nếu sản phẩm hết hàng hoặc không hoạt động thì không cho người dùng thanh toán sản phẩm đó.
2. **Code giao diện quản lý order cho admin/seller**:
    - Get all orders by user ID: Retrieve all orders for a specific user.
    - Get all users: Retrieve all users in the system (for admin/seller).
    - Approve order: Admin/seller changes the status of an order from pending to shipped.
    - Cancel order: User can cancel their order.
    - Cancel user order (role seller).
    - User payment: User marks the order as completed after payment.
3. **Display a list of orders made by the user**.
4. **Dropdown lọc order** theo 4 trạng thái: "pending", "completed", "shipped", "cancelled".
5. **Sử dụng dialog** để hiện chi tiết order khi click vào một order.
6. **Có button để hủy một order** và alert dialog để xác nhận hủy order.
7. **Có button để xác nhận đã nhận hàng** và alert dialog để xác nhận đã nhận hàng.
8. **Sửa code import excel product**: phần hình ảnh, tách ra thành các image 1 2 3, sau đó mới gộp lại thành một mảng.
9. **Thêm option tìm sản phẩm** theo ngày tạo (dùng date picker).
10. **Import depot số lượng lớn bằng excel**.
11. **Seller tạo báo cáo**.
12. **Thêm date filter range cho seller order**.
13. **Người dùng đánh giá sản phẩm**.
14. **Quản lý phần tử ở trang home**.
15. **Chỗ depot ở order đúng màu**.
16. **Sản phẩm bán chạy/chiến dịch**: trừ số lượng sản phẩm trong kho (noti cho admin).
17. **Làm thông báo về report**: report của user về đơn hàng hoặc sản phẩm lên hệ thống, seller có thể phản hồi user thông qua mail về report đó.
18. **Chỗ checkout**: giá total và số lượng sản phẩm đặt hàng.
19. **Seller xem sản phẩm ế nhất**: phương án giải quyết, tạo các bộ sưu tập quần áo, coupon giảm giá các dịp đặc biệt, marketing.
20. **Admin chỉnh sửa custom thông tin header footer home**.
21. Làm sub / unsub mail cho người dùng nhận tin tức từ c hàng về các chương trình mkt
22. Làm xác thực tài khaonr người dùng qua mail xem có phải mail real acc real không, nếu sau khoảng thời gian nào đó mà không xác nhận account, xóa acc (ko ban - vì nhỡ họ quên) - đồng thời nếu khong xác nhận acc thì không cho login vào hệ thống - rõ ràng


