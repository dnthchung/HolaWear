# KOJIRO 803 Admin Web - System Features Documentation

> **Project:** KOJIRO 803 Admin Web  
> **Type:** Educational Platform Administration System  
> **Generated:** 2026-01-27  
> **Tech Stack:** Next.js 13, React 18, TypeScript, Redux Toolkit, Ant Design

---

## 📋 Table of Contents

- [System Overview](#system-overview)
- [Architecture & Technology Stack](#architecture--technology-stack)
- [User Roles & Access Control](#user-roles--access-control)
- [Core Features](#core-features)
- [Feature Modules](#feature-modules)
- [Technical Capabilities](#technical-capabilities)

---

## 🎯 System Overview

**KOJIRO 803 Admin Web** is a comprehensive administrative platform for managing an educational system focused on **driving theory and law learning** for Japanese users preparing for driving license exams. The system provides role-based access control for administrators and teachers to manage educational content, users, assessments, and learning materials.

### Primary Purpose
- Manage driving law educational content (exercises, mock exams, practice questions)
- Administer users and their learning progress for driving license preparation
- Control digital learning resources (driving instruction videos, law texts, knowledge boards)
- Track accuracy rates and performance metrics for driving theory tests
- Manage system configurations and notifications

---

## 🏗️ Architecture & Technology Stack

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 13.2.1 | React framework with SSR/SSG |
| **React** | 18.2.0 | UI library |
| **TypeScript** | 4.9.5 | Type-safe development |
| **Ant Design** | 4.24.8 | UI component library |
| **Tailwind CSS** | 3.2.7 | Utility-first CSS framework |

### State Management
| Technology | Purpose |
|------------|---------|
| **Redux Toolkit** | 1.9.3 - Global state management |
| **Redux Saga** | 1.2.2 - Side effects handling |
| **React Redux** | 8.0.5 - React bindings |

### Additional Libraries
- **next-auth** (4.20.1) - Authentication
- **axios** (1.3.4) - HTTP client
- **moment** (2.29.4) - Date/time handling
- **moment-timezone** (0.5.41) - Timezone support
- **next-translate** (2.6.2) - Internationalization
- **jodit-react** (1.3.39) - Rich text editor
- **react-player** (2.12.0) - Video player
- **clsx** (1.2.1) - Conditional classnames

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Babel** - JavaScript compilation
- **PostCSS** - CSS processing

### Architecture Pattern
- **MVC Pattern** with Next.js pages routing
- **Container/Component Pattern** for UI organization
- **Redux Saga** for async operations
- **Server-Side Rendering (SSR)** for initial page loads
- **API Service Layer** for backend communication

---

## 👥 User Roles & Access Control

### Role Types

#### 1. **Admin (管理者)** - `ERoleId.ADMIN = 1`
Full system access with all administrative privileges.

**Access to:**
- ✅ All features available to Teachers
- ✅ User Management
- ✅ Category Management
- ✅ Digital Text Management
- ✅ Video Management
- ✅ Law Management
- ✅ Coupon Management
- ✅ Proficiency Test User Management
- ✅ Terms of Service Management
- ✅ Notification Management
- ✅ Administrator Management
- ✅ Maintenance Mode
- ✅ Guidance Management
- ✅ Accuracy Rate Export

#### 2. **Teacher (講師)** - `ERoleId.TEACHER = 2`
Limited access focused on content management.

**Access to:**
- ✅ Home Dashboard
- ✅ Exercise Management (練習問題管理)
- ✅ Practice Questions Management (実践問題管理)
- ✅ Mock Exam Management (模擬試験管理)
- ✅ Knowledge Board Management (知識板管理)
- ✅ Proficiency Test Management (実力診断テスト管理)
- ❌ User Management
- ❌ System Configuration
- ❌ Administrative Functions

---

## 🎯 Core Features

### 1. **Authentication & Authorization**
- Secure login system with NextAuth
- Role-based access control (RBAC)
- Session management with cookies
- Protected routes with middleware
- Automatic redirection based on permissions

### 2. **Content Management System (CMS)**
Comprehensive management of educational content:
- Exercise questions
- Practice questions
- Mock exams
- Digital textbooks
- Video lectures
- Knowledge boards
- Laws and regulations

### 3. **User Management**
- User CRUD operations
- Bulk user upload via CSV/Excel
- User filtering and search
- Plan status management
- Registration type tracking (EC Site vs Admin Created)
- Video plan assignment
- Proficiency test flags

### 4. **Assessment Management**
- Exercise creation and management
- Practice question banks
- Mock exam configuration
- Proficiency test administration
- Question categorization
- Difficulty level assignment

### 5. **Analytics & Reporting**
- Accuracy rate tracking by question
- Performance metrics export
- User progress monitoring
- Test result analysis

### 6. **Notification System**
- System-wide announcements
- User notifications
- Admin notifications
- Teacher notifications
- Reply status tracking

### 7. **Resource Management**
- Digital text upload and management
- Video content management
- PR video handling (up to 5GB)
- Category-based organization
- Active/inactive status control

---

## 📦 Feature Modules

### 🏠 **Home Dashboard** (`/`)
- Overview of system statistics
- Quick access to main features
- Recent activity feed

---

### 📚 **Category Management** (`/category`)
**Admin Only**

**Features:**
- Create, read, update, delete categories
- Hierarchical category structure
- Sub-category management
- Category status control (active/inactive)
- Category assignment to content

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/category/index.tsx) - Category list
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/category/create.tsx) - Create new category
- Dynamic edit pages

---

### 📝 **Exercise Management** (`/exercises`)
**Admin & Teacher Access**

**Features:**
- Create and manage practice exercises
- Upload questions via file
- Question form types (single/multiple choice)
- Category assignment
- Active/inactive status
- Question explanations with images
- Bulk question import

**Question Types:**
- Single choice (1 correct answer)
- Multiple choice (4 correct answers)

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/exercises/index.tsx) - Exercise list
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/exercises/create.tsx) - Create exercise
- [upload.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/exercises/upload.tsx) - Bulk upload

---

### 🎯 **Practice Questions Management** (`/questions`)
**Admin & Teacher Access**

**Features:**
- Practice question bank management
- Question categorization
- Difficulty level assignment
- Question explanations
- Image attachments
- Active/inactive control

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/questions/index.tsx) - Question list
- Question creation and editing

---

### 📋 **Mock Exam Management** (`/exams`)
**Admin & Teacher Access**

**Features:**
- Create and configure mock exams
- Question selection and ordering
- Exam settings configuration
- Upload questions in bulk
- Exam status management
- Time limit configuration
- Passing score settings

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/exams/index.tsx) - Exam list (模擬試験一覧)
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/exams/create.tsx) - Create exam (模擬試験名新規登録)
- [setting.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/exams/setting.tsx) - Exam settings
- [upload-questions.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/exams/upload-questions.tsx) - Bulk question upload

---

### 👤 **User Management** (`/users`)
**Admin Only**

**Features:**
- User CRUD operations
- User list with advanced filtering
- User creation and editing
- Bulk user upload (CSV/Excel)
- User status management (active/inactive)
- Role assignment
- Plan management
- Video plan assignment
- Proficiency test flag control
- Registration type tracking

**Filter Options:**
- Active status
- Video plans
- Proficiency test flags
- Plan status
- Register types
- Role ID
- Plans

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/users/index.tsx) - User list (ユーザー一覧)
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/users/create.tsx) - Create user
- [upload.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/users/upload.tsx) - Bulk upload

**User Properties:**
- Role ID (Admin/Teacher)
- Active status
- Video plan (有/無)
- Proficiency test flag (ON/OFF)
- Plan status (Active/Inactive)
- Register type (EC Site/Admin Created)

---

### 📊 **Accuracy Rate Export** (`/accuracy-rate`)
**Admin Only**

**Features:**
- Export question-wise accuracy rates
- Performance analytics
- Data export functionality
- Question difficulty analysis

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/accuracy-rate/index.tsx) - Accuracy rate dashboard (問題別正解率出力)

---

### 📖 **Digital Text Management** (`/digital-texts`)
**Admin Only**

**Features:**
- Upload digital textbooks
- Text categorization
- Active/inactive status
- File management
- Preview functionality

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/digital-texts/index.tsx) - Digital text list (デジタルテキスト管理)
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/digital-texts/create.tsx) - Create/upload text
- [upload.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/digital-texts/upload.tsx) - Bulk upload

---

### 🎥 **Video Management** (`/videos`)
**Admin Only**

**Features:**
- Video content management
- PR video management (up to 5GB)
- Regular video management (up to 5MB)
- Category assignment
- Public/private status control
- Video player integration
- Active/inactive status

**Video Types:**
- PR Videos (promotional, larger size limit)
- Regular educational videos

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/videos/index.tsx) - Video list (動画一覧)
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/videos/create.tsx) - Create video
- [create-pr-video.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/videos/create-pr-video.tsx) - Create PR video

**Size Limits:**
- PR Video: 5GB (5,368,709,120 bytes)
- Regular Video: 5MB (5,242,880 bytes)

---

### ⚖️ **Law Management** (`/laws`)
**Admin Only**

**Features:**
- Legal document management
- Law categorization
- Active/inactive status
- Document versioning

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/laws/index.tsx) - Law list (法令管理)
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/laws/create.tsx) - Create law document

---

### 🧠 **Knowledge Board Management** (`/knowledge-boards`)
**Admin & Teacher Access**

**Features:**
- Knowledge base articles
- Educational content organization
- Rich text editing with Jodit
- Category assignment
- Public/private status
- Inquiry management
- Reply system

**Reply Features:**
- Teacher replies
- Admin replies
- Reply status tracking
- Comment system

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/knowledge-boards/index.tsx) - Knowledge board list (知識板管理)
- Dynamic article pages

---

### 🎫 **Coupon Management** (`/coupon`)
**Admin Only**

**Features:**
- Coupon creation and management
- Coupon code generation
- Validity period setting
- Usage tracking
- Active/inactive status

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/coupon/index.tsx) - Coupon list (クーポン管理)
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/coupon/create.tsx) - Create coupon

---

### 🎓 **Proficiency Test Management** (`/proficiency-tests`)
**Admin & Teacher Access**

**Features:**
- Proficiency test creation
- Test user management (Admin only)
- Question bank management
- Test configuration
- Result tracking
- Implemented status tracking

**Sub-modules:**
- **Test Management** (`/proficiency-tests/test`)
  - Create and manage proficiency tests
  - Question assignment
  - Test settings
  
- **User Management** (`/proficiency-tests/user`) - **Admin Only**
  - Manage users taking proficiency tests
  - Track test completion
  - View results

**Pages:**
- Test management pages
- User management pages (admin only)

---

### 📢 **Notification Management** (`/notifications`)
**Admin Only**

**Features:**
- System-wide announcements
- User notifications
- Notification scheduling
- Read/unread status
- Notification types (success, warning, error, info)

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/notifications/index.tsx) - Notification list (お知らせ管理)
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/notifications/create.tsx) - Create notification

---

### 📜 **Terms of Service Management** (`/term`)
**Admin Only**

**Features:**
- Terms of service editing
- Version management
- Publication control

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/term/index.tsx) - Terms management (利用規約管理)

---

### 👨‍💼 **Administrator Management** (`/admins`)
**Admin Only**

**Features:**
- Admin user CRUD operations
- Role assignment
- Permission management
- Admin account creation

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/admins/index.tsx) - Admin list (管理者)
- [create.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/admins/create.tsx) - Create admin

---

### 🔧 **Maintenance Mode** (`/maintenances`)
**Admin Only**

**Features:**
- System maintenance mode toggle
- Maintenance message configuration
- Scheduled maintenance

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/maintenances/index.tsx) - Maintenance settings (メンテナンス)

---

### 📘 **Guidance Management** (`/guide`)
**Admin Only**

**Features:**
- User guidance content
- Tutorial management
- Help documentation

**Pages:**
- [index.tsx](file:///d:/github-hblab/KOJIRO/803_admin_web/pages/guide/index.tsx) - Guidance management (ガイダンス管理)

---

## 🔧 Technical Capabilities

### State Management (Redux)

**Slices:**
- `account` - User account management
- `admins` - Administrator management
- `auth` - Authentication state
- `category` - Category management
- `digital-texts` - Digital text state
- `exercises` - Exercise management
- `knowledge-board` - Knowledge board state
- `laws` - Law document state
- `mock-tests` - Mock exam state
- `my-notification` - User notifications
- `notification` - System notifications
- `practice-questions` - Practice question state
- `proficiency-tests` - Proficiency test state
- `questions` - Question bank state
- `settings` - System settings
- `sub-category` - Sub-category management
- `users` - User management
- `videos` - Video management

### API Services

**Service Modules:**
- Authentication APIs
- User management APIs
- Content management APIs
- Assessment APIs
- Notification APIs
- Export/Import APIs
- Settings APIs
- Common utility APIs

### File Upload Capabilities

**Supported Upload Types:**
- Questions (images, documents)
- Question explanations (images)
- Exercise questions
- Proficiency test questions
- Digital texts (PDF, documents)
- Videos (MP4, various formats)
- PR Videos (large files up to 5GB)
- User bulk import (CSV, Excel)

**Upload Folders:**
- `questions`
- `question-explanations`
- `exercise-questions`
- `exercise-question-explanations`
- `proficiency-test-questions`
- `proficiency-test-question-explanations`

### Internationalization (i18n)

- Japanese language support
- Translation system with next-translate
- Locale management
- Date/time localization with moment-timezone

### Rich Text Editing

- Jodit React editor integration
- WYSIWYG editing for content
- Image embedding
- HTML content support

### Data Export

- Accuracy rate export
- User data export
- Question bank export
- Performance reports

### Search & Filtering

**Advanced filtering on:**
- Active/inactive status
- Categories
- Date ranges
- User roles
- Plan types
- Registration types
- Implementation status

### Pagination & Sorting

- Server-side pagination
- Sortable columns
- Ascending/descending order
- Configurable page sizes

### Form Validation

- Client-side validation with Ant Design Form
- Server-side validation
- Custom validation rules
- Error message display

### Error Handling

- Custom error pages (403, 404, 503)
- Notification system for errors
- Graceful error recovery
- User-friendly error messages

### Security Features

- Role-based access control (RBAC)
- Protected routes with middleware
- Server-side authentication checks
- Cookie-based session management
- CSRF protection
- Input sanitization

### Performance Optimizations

- Server-side rendering (SSR)
- Static site generation (SSG) where applicable
- Image optimization with Next.js Image
- Code splitting
- Lazy loading
- Debounced search (200ms)

---

## 📊 Data Models & Enums

### Key Enumerations

**User & Roles:**
- `ERoleId`: ADMIN (1), TEACHER (2)
- `EUserRoleId`: USER (1), TEACHER (2)
- `ERegisterType`: EC_SITE (1), ADMIN_CREATE (2)
- `EPlanStatus`: INACTIVE (1), ACTIVE (2)

**Content Status:**
- `EIsActive`: ENABLE (1), DISABLE (2)
- `EImplementedStatus`: IMPLEMENTED (1), NOT_IMPLEMENTED (2)
- `EPublicVideo`: PUBLIC (1), PRIVATE (2)

**Question Types:**
- `EQuestionForm`: SINGLE (1), MULTIPLE (2)
- `EQuestionType`: EXERCISE (1), PRACTICE (2), EXAM (3)
- `ENumberQuestion`: SINGLE (1), MULTIPLE (4)

**Features:**
- `EVideoPlan`: NOT_VIDEO (1), HAVE_VIDEO (2)
- `EProficiencyTestFlag`: OFF (1), ON (2)

**Notifications:**
- `ETypeNotification`: SUCCESS, WARNING, ERROR, INFO
- `ESendToTeacher`: NO (1), YES (2)
- `ESendToAdmin`: NO (1), YES (2)

**Reply Status:**
- `ETeacherReplyStatus`: NO_REPLY (1), REPLIED (2), NOT_RELATE (3)
- `EAdminReplyStatus`: NO_REPLY (1), REPLIED (2), NOT_RELATE (3)
- `EReplyType`: REPLY_INQUIRY (1), REPLY_COMMENT (2), NO_REPLY (3)

**Inquiry:**
- `EInquiryIsPublic`: PUBLIC (1), PRIVATE (2)

**Settings:**
- `ESetingStatus`: DONE (1), DOING (2)
- `ENeedCheckWithSetting`: NEED (1), DONT_NEED (0)

**Sorting:**
- `ESortType`: DESC, ASC

**Date Formats:**
- `EFormatDateTime`: YYYY/MM/DD HH:mm, YYYY/MM/DD

---

## 🌐 API Integration

**Base URL:** `https://dev-api.kojiro.hblab.dev/api/v1/admin`

**Authentication:**
- NextAuth integration
- Cookie-based sessions
- JWT tokens

**API Structure:**
- RESTful API design
- Axios HTTP client
- Authorized API instance
- Request/response interceptors
- Error handling middleware

---

## 🎨 UI/UX Features

### Design System
- Ant Design component library
- Tailwind CSS utility classes
- Custom LESS variables
- Responsive design
- Mobile-friendly layouts

### Components
- Reusable UI components
- Form components with validation
- Modal dialogs
- Confirmation dialogs
- Notification toasts
- Loading states
- Error boundaries

### User Experience
- Breadcrumb navigation
- Back button with history management
- Confirmation modals for destructive actions
- Success/error notifications
- Loading indicators
- Responsive tables
- Sortable columns
- Filterable lists
- Search with debouncing

---

## 🔐 Security & Access Control

### Authentication Flow
1. User login via `/login`
2. NextAuth session creation
3. Cookie-based session storage
4. Server-side session validation
5. Role-based route protection

### Protected Routes
- Middleware checks authentication
- Server-side props validate user role
- Automatic redirection for unauthorized access
- 403 page for forbidden access
- 404 page for not found resources

### Permission Matrix

| Feature | Admin | Teacher |
|---------|-------|---------|
| Home Dashboard | ✅ | ✅ |
| Category Management | ✅ | ❌ |
| Exercise Management | ✅ | ✅ |
| Practice Questions | ✅ | ✅ |
| Mock Exams | ✅ | ✅ |
| User Management | ✅ | ❌ |
| Accuracy Rate Export | ✅ | ❌ |
| Digital Texts | ✅ | ❌ |
| Video Management | ✅ | ❌ |
| Law Management | ✅ | ❌ |
| Knowledge Boards | ✅ | ✅ |
| Coupon Management | ✅ | ❌ |
| Proficiency Tests | ✅ | ✅ |
| Proficiency Test Users | ✅ | ❌ |
| Terms of Service | ✅ | ❌ |
| Notifications | ✅ | ❌ |
| Administrator Management | ✅ | ❌ |
| Maintenance Mode | ✅ | ❌ |
| Guidance Management | ✅ | ❌ |

---

## 📝 Summary

The **KOJIRO 803 Admin Web** system is a comprehensive educational platform administration tool built with modern web technologies. It provides:

✅ **Role-based access control** for Admins and Teachers  
✅ **Complete content management** for educational materials  
✅ **User management** with bulk operations  
✅ **Assessment management** (exercises, exams, proficiency tests)  
✅ **Digital resource management** (videos, texts, documents)  
✅ **Analytics and reporting** capabilities  
✅ **Notification system** for user communication  
✅ **Rich text editing** for content creation  
✅ **File upload** with various format support  
✅ **Responsive design** with modern UI/UX  
✅ **Secure authentication** and authorization  

The system is designed to support Japanese language education with a focus on proficiency testing, exam preparation, and comprehensive learning resource management.

---

**End of Documentation**
