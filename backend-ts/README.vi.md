# Backend-TS - HolaWear API v2

**Tài liệu tiếng Việt cho Backend TypeScript**

---

## **Tổng Quan Dự Án**

**Backend-v2** là server REST API được xây dựng trên nền tảng Node.js và Express.js, sử dụng TypeScript để đảm bảo tính an toàn về kiểu dữ liệu. Hệ thống được thiết kế với kiến trúc phân lớp rõ ràng, áp dụng các design pattern hiện đại như Repository Pattern, Singleton Pattern và Dependency Injection.

### **Thông Tin Dự Án**

- **Tên dự án**: api_holawear_v2
- **Phiên bản**: 1.0.0
- **Ngôn ngữ chính**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js v5.1.0
- **Database**: MongoDB (Mongoose ODM v8.15.2)

### **Mục Đích**

Hệ thống backend-v2 được xây dựng để phục vụ ứng dụng thương mại điện tử HolaWear, cung cấp các API endpoint cho quản lý sản phẩm, quản lý cửa hàng và các chức năng liên quan đến e-commerce.

---

## **Công Nghệ và Framework**

### **1. Công Nghệ Cốt Lõi**

#### **Runtime và Ngôn Ngữ**
- **Node.js**: Môi trường runtime JavaScript phía server
- **TypeScript v5.8.3**: Ngôn ngữ lập trình chính, cung cấp type safety
- **Target ES2023**: Biên dịch code sang JavaScript phiên bản ES2023
- **Module System**: NodeNext (ESM - ECMAScript Modules)

#### **Web Framework**
- **Express.js v5.1.0**: Framework web chính để xây dựng REST API
- **Body Parser**: Xử lý dữ liệu JSON và URL-encoded (giới hạn 10MB)

### **2. Database và ORM**

#### **Database**
- **MongoDB**: Database NoSQL chính
- **Connection Strategy**: Hỗ trợ multi-database với connection pooling
- **Pool Size**: Tối đa 10 connections mỗi database

#### **ODM (Object Document Mapper)**
- **Mongoose v8.15.2**: ODM cho MongoDB
- **Schema Validation**: Sử dụng Mongoose schema để validate dữ liệu
- **Timestamps**: Tự động quản lý createdAt và updatedAt

### **3. Bảo Mật và Middleware**

#### **Security Middleware**
- **Helmet v8.1.0**: Bảo vệ HTTP headers
- **Compression v1.8.0**: Nén dữ liệu response để tối ưu băng thông
- **Express Rate Limit v7.5.1**: Giới hạn số lượng request để chống DDoS
  - Auth Limiter: 5 requests/15 phút
  - General Limiter: 100 requests/50 phút

#### **Authentication và Authorization**
- **JWT (JSON Web Token) v9.0.2**: Xác thực người dùng
  - Access Token: Thời hạn 15 phút
  - Refresh Token: Thời hạn 30 ngày
  - Algorithm: HS256
- **Bcrypt v6.0.0**: Mã hóa mật khẩu
- **Firebase Admin v13.4.0**: Tích hợp Firebase Authentication

### **4. Validation và Type Safety**

- **Zod v3.25.64**: Schema validation và type inference
- **TypeScript Strict Mode**: Bật chế độ kiểm tra kiểu nghiêm ngặt
- **Custom Type Definitions**: File type.d.ts cho các kiểu dữ liệu global

### **5. Logging và Monitoring**

#### **Hệ Thống Logging**
- **Winston v3.17.0**: Thư viện logging chính
- **Winston Daily Rotate File v5.0.0**: Quản lý file log theo ngày
- **Log Levels**: info, error, warn, debug
- **Log Rotation**: 
  - Kích thước tối đa: 20MB
  - Thời gian lưu trữ: 14 ngày
  - Nén: Zip các log cũ

#### **Request Logging**
- **Morgan v1.10.0**: Middleware ghi log HTTP request (chế độ dev)

### **6. Development Tools**

#### **Build Tools**
- **TSC (TypeScript Compiler)**: Biên dịch TypeScript sang JavaScript
- **TSC-Alias v1.8.16**: Xử lý path aliases trong TypeScript
- **Rimraf v6.0.1**: Xóa thư mục build trước khi build mới

#### **Development Server**
- **Nodemon v3.1.10**: Tự động restart server khi code thay đổi
- **TSX v4.20.3**: TypeScript execution engine cho development

#### **Code Quality**
- **ESLint v9.28.0**: Linter cho JavaScript/TypeScript
- **Prettier v3.5.3**: Code formatter
- **TypeScript ESLint v8.34.0**: Plugin ESLint cho TypeScript

#### **Testing Framework**
- **Jest v30.0.3**: Framework testing chính
- **TS-Jest v29.4.0**: TypeScript preprocessor cho Jest
- **Supertest v7.1.1**: Thư viện HTTP assertion
- **MongoDB Memory Server v10.1.4**: In-memory MongoDB cho unit test
- **Jest JUnit v16.0.0**: JUnit reporter cho CI/CD
- **Cross-env v7.0.3**: Thiết lập biến môi trường cross-platform

### **7. Thư Viện Bổ Sung**

- **Crypto-js v4.2.0**: Mã hóa và giải mã dữ liệu
- **Nodemailer v7.0.5**: Gửi email
- **Libphonenumber-js v1.12.10**: Validate và format số điện thoại
- **Dotenv v16.5.0**: Quản lý biến môi trường
- **IORedis v5.6.1**: Redis client (cho caching)
- **KafkaJS v2.2.4**: Apache Kafka client (cho message queue)
- **AMQPLIB v0.10.9**: RabbitMQ client (cho message queue)

---

## **Kiến Trúc Hệ Thống**

### **1. Mô Hình Kiến Trúc Phân Lớp**

Hệ thống được tổ chức theo mô hình 4 lớp rõ ràng:

```
Request Flow:
HTTP Request → Middleware → Controller → Service → Repository → Database
                    ↓
              Error Handler
```

#### **Presentation Layer (Routes + Controllers)**
- **Trách nhiệm**: Nhận HTTP request, validate input, gọi service layer
- **Thư mục**: `src/api/v1/routes/`, `src/api/v1/controllers/`
- **Pattern**: RESTful API design

#### **Business Logic Layer (Services)**
- **Trách nhiệm**: Xử lý business logic, điều phối giữa các repository
- **Thư mục**: `src/api/v1/services/`
- **Pattern**: Service Pattern, Dependency Injection

#### **Data Access Layer (Repositories)**
- **Trách nhiệm**: Tương tác với database, query dữ liệu
- **Thư mục**: `src/api/v1/repositories/`
- **Pattern**: Repository Pattern, Base Repository Pattern

#### **Data Layer (Models)**
- **Trách nhiệm**: Định nghĩa schema và model cho database
- **Thư mục**: `src/api/v1/models/`
- **Pattern**: Mongoose Schema Pattern

### **2. Cấu Trúc Thư Mục**

```
backend-ts/
├── src/
│   ├── api/
│   │   ├── v1/                      # API phiên bản 1
│   │   │   ├── config/              # Cấu hình hệ thống
│   │   │   │   └── env.config.ts    # Cấu hình môi trường
│   │   │   ├── constants/           # Hằng số
│   │   │   │   ├── common.constant.ts
│   │   │   │   └── messages.constant.ts
│   │   │   ├── controllers/         # Controllers (Presentation Layer)
│   │   │   │   └── product.controller.ts
│   │   │   ├── db/                  # Cấu hình database
│   │   │   │   ├── init.mongo.ts    # Database Singleton
│   │   │   │   └── dbName.mongo.ts  # Database Manager
│   │   │   ├── logger/              # Hệ thống logging
│   │   │   │   └── winston.log.ts
│   │   │   ├── logs/                # Thư mục chứa log files
│   │   │   ├── middlewares/         # Express middlewares
│   │   │   │   ├── errorHandler.middleware.ts
│   │   │   │   ├── rateLimiter.middleware.ts
│   │   │   │   ├── validation.middleware.ts
│   │   │   │   └── index.ts
│   │   │   ├── models/              # Mongoose models
│   │   │   │   ├── product.model.ts
│   │   │   │   ├── shop.model.ts
│   │   │   │   └── index.ts
│   │   │   ├── repositories/        # Data Access Layer
│   │   │   │   ├── base.repository.ts
│   │   │   │   ├── product.repository.ts
│   │   │   │   ├── shop.repository.ts
│   │   │   │   └── index.ts
│   │   │   ├── routes/              # API routes
│   │   │   │   ├── index.route.ts
│   │   │   │   ├── product.route.ts
│   │   │   │   └── shop.route.ts
│   │   │   ├── services/            # Business Logic Layer
│   │   │   │   └── product.service.ts
│   │   │   ├── types/               # TypeScript type definitions
│   │   │   │   ├── product.type.ts
│   │   │   │   ├── shop.type.ts
│   │   │   │   └── response.type.ts
│   │   │   ├── utils/               # Utility functions
│   │   │   │   ├── bcrypt.util.ts
│   │   │   │   ├── common.util.ts
│   │   │   │   ├── otp.util.ts
│   │   │   │   └── response.util.ts
│   │   │   └── validations/         # Validation schemas
│   │   │       └── shop.validation.ts
│   │   └── v2/                      # API phiên bản 2 (tương lai)
│   ├── monitoring/                  # Công cụ monitoring
│   ├── index.ts                     # Express app setup
│   ├── server.ts                    # Server entry point
│   └── type.d.ts                    # Global type definitions
├── .env                             # Biến môi trường
├── .env.example                     # Template môi trường
├── package.json                     # Dependencies
├── tsconfig.json                    # Cấu hình TypeScript
├── nodemon.json                     # Cấu hình Nodemon
├── eslint.config.mjs                # Cấu hình ESLint
├── .prettierrc                      # Cấu hình Prettier
└── notes.md                         # Ghi chú phát triển
```

### **3. Design Patterns**

#### **Singleton Pattern**
- **Sử dụng trong**: Database connection, Logger
- **Mục đích**: Đảm bảo chỉ có một instance tồn tại trong toàn bộ ứng dụng
- **Ví dụ**:
  - `Database.getInstance()` trong `init.mongo.ts`
  - `DatabaseManager.getInstance()` trong `dbName.mongo.ts`
  - `MyLogger` trong `winston.log.ts`

#### **Repository Pattern**
- **Sử dụng trong**: Data Access Layer
- **Mục đích**: Tách biệt logic query database khỏi business logic
- **Cấu trúc**:
  - `BaseRepository`: Abstract class chứa logic chung
  - `ProductRepository`, `ShopRepository`: Concrete implementations

#### **Service Pattern**
- **Sử dụng trong**: Business Logic Layer
- **Mục đích**: Tập trung xử lý business logic, điều phối các repository
- **Ví dụ**: `ProductService` điều phối `ProductRepository` và `ShopRepository`

#### **Factory Pattern**
- **Sử dụng trong**: Error Response classes
- **Mục đích**: Tạo ra các loại error response khác nhau
- **Ví dụ**: `SuccessResponse.ok()`, `SuccessResponse.created()`

#### **Dependency Injection**
- **Sử dụng trong**: Controllers và Services
- **Mục đích**: Giảm sự phụ thuộc, tăng khả năng test
- **Ví dụ**: `ProductController` inject `ProductService`

---

## **Thiết Kế Database**

### **1. Chiến Lược Database**

#### **Hỗ Trợ Multi-Database**
Hệ thống hỗ trợ nhiều database cho các môi trường khác nhau:
- **holawear_v2_db**: Production database
- **testing**: Integration test database
- **memory**: In-memory database cho unit test

#### **Quản Lý Connection**
- **Pattern**: Connection Pooling với Singleton
- **Pool Size**: 10 connections/database
- **Connection Reuse**: Cache connections trong Map
- **Health Check**: Endpoint `/health` để kiểm tra trạng thái database

### **2. Database Models**

#### **Shop Model**
```typescript
{
  shop_name: String (required)
  shop_description: String (required)
  shop_address: String
  shop_phone: String
  shop_email: String
  shop_website: String
  shop_logo: String
  shop_banner: String
  status: Boolean (default: true)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

**Mục đích**: Quản lý thông tin cửa hàng trong hệ thống e-commerce

#### **Product Model**
```typescript
{
  shop_id: ObjectId (ref: Shop, required)
  product_name: String (required)
  product_description: String (required)
  product_price: Number (required)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

**Mục đích**: Quản lý sản phẩm thuộc các cửa hàng

**Quan hệ**: Product thuộc về Shop (Many-to-One)

---

## **Thiết Kế API**

### **1. API Versioning**

Hệ thống sử dụng versioning dựa trên URL:
- **Base URL**: `/api/v1`
- **Phiên bản tương lai**: `/api/v2` (đã chuẩn bị thư mục)

### **2. API Endpoints**

#### **Health Check**
- **Endpoint**: `GET /health`
- **Mục đích**: Kiểm tra trạng thái server và database
- **Response**:
```json
{
  "timeStamp": "2026-02-02T08:55:35.000Z",
  "database": {
    "status": "healthy",
    "connected": true,
    "readyState": 1
  }
}
```

#### **Product APIs**
- **Base URL**: `/api/v1/products`
- **Endpoints**: (Đang phát triển)
  - `GET /` - Lấy danh sách sản phẩm

#### **Shop APIs**
- **Base URL**: `/api/v1/shops`
- **Endpoints**: (Đang phát triển)

### **3. Định Dạng Response**

#### **Success Response**
```json
{
  "status": "success",
  "statusCode": 200,
  "message": "Thông báo thành công",
  "data": { },
  "metadata": {
    "timestamp": "2026-02-02T08:55:35.000Z"
  }
}
```

#### **Error Response**
```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Thông báo lỗi",
  "errorType": "BAD_REQUEST",
  "details": { },
  "metaData": {
    "timeStamp": "2026-02-02T08:55:35.000Z"
  }
}
```

### **4. Các Loại Error**

- **BadRequestError (400)**: Request không hợp lệ
- **UnauthorizedError (401)**: Chưa xác thực
- **ForbiddenError (403)**: Không có quyền truy cập
- **NotFoundError (404)**: Không tìm thấy tài nguyên
- **ConflictError (409)**: Xung đột dữ liệu
- **ValidationError (422)**: Lỗi validate dữ liệu
- **TooManyRequest (429)**: Quá nhiều request
- **InternalServerError (500)**: Lỗi server

---

## **Cài Đặt và Chạy Dự Án**

### **1. Yêu Cầu Hệ Thống**

- **Node.js**: >= 18.x
- **MongoDB**: >= 6.0
- **npm** hoặc **yarn**

### **2. Cài Đặt**

```bash
# Clone repository
git clone https://github.com/dnthchung/HolaWear.git
cd HolaWear/backend-ts

# Cài đặt dependencies
npm install

# Tạo file .env từ template
cp .env.example .env
```

### **3. Cấu Hình Môi Trường**

Chỉnh sửa file `.env`:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_URI=mongodb://localhost:27017
DB_NAME=holawear_v2_db
DB_OPTION=retryWrites=true&w=majority

# JWT Configuration
JWT_ACCESS_TOKEN_SECRET=your_access_secret_here
JWT_REFRESH_TOKEN_SECRET=your_refresh_secret_here
JWT_ACCESS_TOKEN_EXPIRES_IN=15m
JWT_REFRESH_TOKEN_EXPIRES_IN=30d
ALGORITHM=HS256

# Email Configuration
EMAIL_ADMIN=admin@example.com
EMAIL_APP_PASSWORD=your_email_app_password

# Firebase Configuration (Optional)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
```

### **4. Chạy Development Server**

```bash
# Chạy development mode với nodemon
npm run dev
```

Server sẽ chạy tại `http://localhost:3000`

### **5. Build và Production**

```bash
# Build project
npm run build

# Chạy production server
npm start
```

---

## **Testing**

### **1. Các Loại Test**

#### **Unit Tests**
```bash
# Chạy unit tests
npm run test:unit
```

#### **Integration Tests**
```bash
# Chạy integration tests
npm run test:integration
```

#### **Tất Cả Tests**
```bash
# Chạy tất cả tests
npm run test:all

# Chạy tests với coverage
npm run test:coverage

# Chạy tests ở chế độ watch
npm run test:watch
```

### **2. Test Environment**

- **Unit tests**: Sử dụng MongoDB Memory Server (in-memory)
- **Integration tests**: Sử dụng MongoDB thật (testing database)

---

## **Code Quality**

### **1. Linting**

```bash
# Kiểm tra code với ESLint
npm run lint

# Tự động fix lỗi ESLint
npm run lint:fix
```

### **2. Formatting**

```bash
# Kiểm tra format với Prettier
npm run prettier

# Tự động format code
npm run prettier:fix
```

### **3. Quy Ước Đặt Tên**

- **Files**: snake_case (product.controller.ts)
- **Classes**: PascalCase (ProductController)
- **Functions/Variables**: camelCase (getProductById)
- **Constants**: UPPER_SNAKE_CASE (MAX_POOL_SIZE)

---

## **Bảo Mật**

### **1. Các Biện Pháp Bảo Mật Đã Triển Khai**

1. **HTTP Headers Security**: Helmet middleware
2. **Rate Limiting**: Chống DDoS và brute-force attacks
3. **Password Hashing**: Bcrypt adaptive hashing
4. **JWT Authentication**: Xác thực dựa trên token an toàn
5. **Environment Variables**: Dữ liệu nhạy cảm không hard-code
6. **Input Validation**: Zod schema validation
7. **Error Handling**: Không expose thông tin nhạy cảm trong production

### **2. Khuyến Nghị Bảo Mật**

1. **CORS Configuration**: Cấu hình CORS cho production
2. **HTTPS**: Sử dụng HTTPS trong production
3. **Secrets Management**: Sử dụng secrets manager (AWS Secrets Manager, Azure Key Vault)
4. **Database Encryption**: Bật encryption at rest
5. **Audit Logging**: Log tất cả security events
6. **Dependency Scanning**: Quét lỗ hổng trong dependencies

---

## **Middleware Stack**

### **Request Processing Flow**

```
Request
  ↓
Body Parser (JSON, URL-encoded)
  ↓
Compression
  ↓
Morgan (Request Logging)
  ↓
Helmet (Security Headers)
  ↓
Rate Limiter (Optional)
  ↓
Validation Middleware (Optional)
  ↓
Route Handler
  ↓
Error Handler
  ↓
Response
```

---

## **Logging**

### **1. Winston Logger Configuration**

#### **Log Levels**
- **error**: Lỗi nghiêm trọng cần xử lý ngay
- **warn**: Cảnh báo, không ảnh hưởng hệ thống
- **info**: Thông tin chung về hoạt động hệ thống
- **debug**: Thông tin chi tiết để debug

#### **Log Format**
```
YYYY-MM-DD hh:mm:ss.SSS A --- [LEVEL] --- [CONTEXT] --- [MESSAGE]
```

**Ví dụ**:
```
2026-02-02 08:55:35.123 AM --- error --- /api/v1/products --- Product not found
```

#### **Log Rotation**
- **Kích thước tối đa**: 20MB
- **Thời gian lưu trữ**: 14 ngày
- **Nén**: Zip các log cũ

---

## **Deployment**

### **1. Build Process**

```bash
npm run build
```

**Các bước**:
1. Xóa thư mục `dist` cũ (rimraf)
2. Biên dịch TypeScript sang JavaScript (tsc)
3. Xử lý path aliases (tsc-alias)

### **2. Production Start**

```bash
npm start
```

**Chạy**: `node dist/index.js`

### **3. Graceful Shutdown**

Hệ thống xử lý graceful shutdown khi nhận signal:
- **SIGTERM**: Terminate signal
- **SIGINT**: Interrupt signal (Ctrl+C)

**Quy trình shutdown**:
1. Ngừng nhận connection mới
2. Đóng HTTP server
3. Ngắt kết nối database
4. Thoát process

---

## **Điểm Mạnh và Điểm Yếu**

### **Điểm Mạnh**

1. **Kiến trúc rõ ràng**: Layered architecture dễ maintain
2. **Type Safety**: TypeScript strict mode
3. **Design Patterns**: Áp dụng đúng các pattern hiện đại
4. **Bảo mật**: Nhiều lớp bảo mật
5. **Logging**: Hệ thống logging chi tiết
6. **Testing**: Chiến lược testing rõ ràng
7. **Scalability**: Chuẩn bị sẵn cho scaling
8. **Documentation**: Có notes.md và comments

### **Điểm Yếu và Cần Cải Thiện**

1. **API Endpoints**: Chưa hoàn thiện, đang phát triển
2. **Validation**: Zod validation chưa implement đầy đủ
3. **Authentication Middleware**: Chưa có JWT authentication middleware
4. **CORS Configuration**: CORS chưa được cấu hình
5. **Database Indexes**: Chưa định nghĩa indexes
6. **Caching**: Redis client chưa được sử dụng
7. **API Documentation**: Chưa có Swagger/OpenAPI docs
8. **Monitoring**: Chưa implement monitoring
9. **CI/CD**: Chưa có pipeline
10. **Error Messages**: Cần chuẩn hóa error messages

---

## **Roadmap**

### **Ngắn Hạn (1-2 tháng)**

1. Hoàn thiện Product và Shop APIs
2. Implement JWT authentication middleware
3. Thêm Zod validation cho tất cả endpoints
4. Cấu hình CORS
5. Viết API documentation (Swagger)
6. Thêm database indexes
7. Implement caching với Redis

### **Trung Hạn (3-6 tháng)**

1. Implement monitoring system
2. Setup CI/CD pipeline
3. Thêm các tính năng business (Cart, Order, Payment)
4. Implement file upload (product images)
5. Thêm chức năng search và filter
6. Tối ưu performance
7. Security audit

### **Dài Hạn (6-12 tháng)**

1. Microservices architecture
2. Message queue implementation (Kafka/RabbitMQ)
3. Advanced analytics
4. Multi-region deployment
5. GraphQL API (optional)
6. Real-time features (WebSocket)

---

## **Contributing**

Sử dụng các prefix commit message sau khi đóng góp:

- `chore:` Cập nhật không ảnh hưởng đáng kể đến dự án (ví dụ: refactor configs)
- `feat:` Thêm tính năng mới
- `fix:` Sửa bug
- `docs:` Thêm hoặc cập nhật documentation
- `perf:` Cải thiện performance
- `refactor:` Refactor code mà không thay đổi behavior
- `style:` Thay đổi liên quan đến style không ảnh hưởng logic
- `test:` Thêm hoặc cập nhật tests

---

## **License**

Dự án này được phát triển như một phần của khóa học SDN301m, tập trung vào xây dựng ứng dụng web full-stack.

---

## **Liên Hệ và Hỗ Trợ**

Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, vui lòng:
- Tạo issue trên GitHub repository
- Liên hệ team phát triển qua email

---

**Phát triển bởi**: HolaWear Development Team  
**Phiên bản**: 1.0.0  
**Cập nhật lần cuối**: 2026-02-02
