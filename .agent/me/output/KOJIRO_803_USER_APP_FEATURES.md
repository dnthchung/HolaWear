# KOJIRO 803 User App - Features Documentation

## 📋 Overview

**KOJIRO** is a comprehensive React Native mobile application designed to help users learn driving laws and prepare for driving license exams. The app provides a complete learning ecosystem with exercises, mock exams, video tutorials, digital texts, and a knowledge-sharing community.

**Platform**: iOS & Android  
**Framework**: React Native 0.70.5  
**State Management**: Redux + Redux Saga  
**Backend Integration**: RESTful API  
**Push Notifications**: Firebase Cloud Messaging + Notifee  
**Analytics**: Firebase Analytics  
**In-App Purchases**: React Native IAP

---

## 🎯 Core Features

### 1. Authentication & User Management

#### 1.1 User Authentication
- **Login System**: Secure user authentication with credentials
- **Password Recovery**: 
  - Forgot password flow with email verification
  - Reset password with token-based security
  - Expiration checking for password reset links
- **Forgot Login ID**: Email-based login ID recovery
- **Session Management**: Token-based authentication with automatic refresh

#### 1.2 User Registration & Trial
- **Trial Registration**: Users can register for trial accounts
- **PIN Code Verification**: OTP/PIN code confirmation for registration
- **Email Verification**: Email confirmation flow for new accounts
- **Account Type Selection**: Different account types and plans

#### 1.3 Account Management
- **Profile Management**: View and edit user information
- **Email Change**: 
  - Request email change with verification
  - Confirm new email with signature validation
  - Deep linking support for email confirmation
- **Account Deletion**: Secure account deletion with password confirmation
- **Terms of Service**: Access to terms and trial terms

---

### 2. Learning Modules

#### 2.1 Exercises (練習問題)
- **Category-Based Learning**: 
  - Browse exercises by categories
  - Sub-category organization
  - Progress tracking per category
- **Exercise Flow**:
  - Start exercise session
  - Answer questions with immediate feedback
  - View results and explanations
  - Preview question details
- **Training Mode**: Specialized training exercises
- **Anxiety Mode**: Practice for anxiety-prone scenarios

#### 2.2 Practice Tests (模擬試験)
- **Practice Sessions**: 
  - Full-length practice tests
  - Timed practice mode
  - Question navigation
- **Wrong Answer Review**: 
  - Review incorrectly answered questions
  - Focused practice on weak areas
  - Track improvement over time
- **Anxiety Practice**: Specialized anxiety scenario practice

#### 2.3 Mock Exams (本試験)
- **Exam Management**:
  - List of available exams
  - Exam history and results
  - Start new exam sessions
- **Exam Flow**:
  - Timed exam environment
  - Question-by-question navigation
  - Answer submission and modification
  - Remaining time tracking
  - Submit exam for grading
- **Results & Review**:
  - Detailed exam results
  - Question-by-question explanations
  - Historical result viewing
  - Performance analytics
- **Wrong Answer Analysis**: 
  - Review wrong answers from exams
  - Targeted practice on missed questions
- **Anxiety Exam Mode**: Exam practice for anxiety scenarios

#### 2.4 Proficiency Exams (能力試験)
- **Comprehensive Testing**:
  - Start proficiency exam
  - Question status tracking
  - Answer submission
  - Time management
- **Advanced Features**:
  - Get specific questions
  - Navigate between questions
  - Submit complete exam
  - View detailed results
- **Results Analysis**:
  - Exam result viewing
  - Question explanations
  - Historical results
  - Out-of-date result handling
- **Settings**: Configurable exam settings

---

### 3. Learning Resources

#### 3.1 Video Library
- **Video Categories**: Organized video content by categories
- **Video Features**:
  - Browse videos by category
  - Video detail viewing
  - Video playback with player controls
  - Watch history tracking
  - Promotional videos
- **Video Purchase**: Confirm and purchase individual videos
- **Progress Tracking**: Track watched videos

#### 3.2 Digital Texts (デジタル教材)
- **Text Library**: Collection of digital learning materials
- **Features**:
  - Browse digital texts
  - Detailed text viewing
  - HTML rendering support
  - Offline access capability

---

### 4. Knowledge Community

#### 4.1 Knowledge Boards (質問掲示板)
- **Community Features**:
  - Browse knowledge board posts
  - Category and sub-category filtering
  - Search functionality
  - Post new questions
- **Post Details**:
  - View detailed posts
  - Read comments and replies
  - Nested comment threads
- **Commenting System**:
  - Post comments
  - Reply to comments
  - Send to teacher/admin flags
  - Update comment settings
  - Reply type management
- **Notifications**:
  - Knowledge board notifications
  - Comment notifications
  - Real-time updates via push notifications

---

### 5. Subscription & Payment Management

#### 5.1 Plan Management
- **Trial Plans**: 
  - View available trial plans
  - Register for trial
  - Confirm trial registration
- **Plan Extension**:
  - **Pattern One**: Standard plan extension
  - **Pattern Two**: Alternative extension method
  - **Pattern Three**: Advanced extension options
  - Confirm plan extensions
  - Extend plan in use
- **Account Type Management**:
  - Verify account type with OTP
  - Register extended plans
  - Check account type status

#### 5.2 Coupon System
- **Coupon Features**:
  - Enter coupon codes
  - Validate coupons
  - Apply discounts
  - View coupon details

---

### 6. Notifications

#### 6.1 Push Notifications
- **Firebase Integration**:
  - FCM token management
  - Device registration
  - Remote message handling
  - Background notifications
- **Notification Types**:
  - Knowledge board updates (type 2, 3)
  - General notifications (type 4, 5, 7, 8)
  - Comment notifications
  - System notifications
- **Notification Actions**:
  - Deep linking to specific screens
  - Navigate to knowledge comments
  - Navigate to notification details
  - Foreground/background handling

#### 6.2 In-App Notifications
- **Notification Center**:
  - List all notifications
  - View notification details
  - Mark as read
  - Notification history

---

### 7. Navigation & UI

#### 7.1 Navigation Structure
- **Bottom Tab Navigation**: Main app navigation
- **Drawer Navigation**: Side menu access
- **Stack Navigation**: Screen hierarchy management
- **Navigation Flows**:
  - Home Flow
  - Practice Flow
  - Reading Flow (Digital Texts)
  - Video Flow
  - Question Flow (Knowledge Boards)
  - Other Flow (Settings, Profile, etc.)

#### 7.2 Screen Organization
- **59 Screens** organized into functional areas:
  - Authentication screens
  - Learning module screens
  - Resource viewing screens
  - Community screens
  - Account management screens
  - Settings and utility screens

---

### 8. Deep Linking

#### 8.1 URL Handling
- **Supported Deep Links**:
  - Password reset: `password/reset`
  - Email edit: `email/edit`
  - Email confirm: `email/confirm`
  - Forgot login ID: `forgot-login-id`
- **Link Expiration**: Token and timestamp validation
- **Callback Handling**: Store callback URLs for post-login navigation

---

### 9. Settings & Configuration

#### 9.1 App Settings
- **Exam Settings**: Configurable exam parameters
- **Proficiency Exam Settings**: Specialized test configurations
- **Promotional Content**: Promotional video settings
- **Maintenance Mode**: System maintenance handling

#### 9.2 User Preferences
- **Screen Orientation**: Locked to portrait mode
- **Language**: i18next internationalization support
- **Theme**: Customizable themes via theme system

---

### 10. Technical Features

#### 10.1 State Management
- **Redux Stores** (22 modules):
  - `userRedux`: User authentication and profile
  - `exerciseRedux`: Exercise state management
  - `examRedux`: Exam state and progress
  - `proficiencyExamRedux`: Proficiency exam state
  - `practiveRedux`: Practice test state
  - `knowledgeRedux`: Knowledge board state
  - `videosRedux`: Video library state
  - `digitalTextsRedux`: Digital texts state
  - `notificationRedux`: Notification state
  - `anxietyRedux`: Anxiety mode state
  - `wrongExamRedux`: Wrong answer tracking
  - `wrongExcersiceRedux`: Wrong exercise tracking
  - `wrongPractiveRedux`: Wrong practice tracking
  - `maintenancesRedux`: Maintenance mode
  - `tempRedux`: Temporary state
  - `guideRedux`: User guides

#### 10.2 API Integration
- **20 API Service Modules**:
  - Authentication API
  - Exercise API
  - Exam API
  - Proficiency Exam API
  - Practice API
  - Knowledge Board API
  - Video API
  - Digital Texts API
  - Notification API
  - Anxiety mode APIs
  - Wrong answer APIs
  - Maintenance API
  - Coupon API

#### 10.3 Data Persistence
- **Redux Persist**: State persistence across app restarts
- **AsyncStorage**: Local data storage
- **Secure Storage**: Token and sensitive data storage

#### 10.4 Media Handling
- **Video Player**: React Native Video integration
- **Thumbnail Generation**: Video thumbnail creation
- **Image Zoom**: Image viewer with zoom capability
- **HTML Rendering**: Rich text and HTML content display

---

## 🏗️ Technical Architecture

### Frontend Architecture
```
┌─────────────────────────────────────────┐
│         React Native App (0.70.5)       │
├─────────────────────────────────────────┤
│  Navigation Layer                       │
│  ├── Bottom Tabs                        │
│  ├── Drawer                             │
│  └── Stack Navigators                   │
├─────────────────────────────────────────┤
│  State Management (Redux + Saga)        │
│  ├── 22 Redux Modules                   │
│  ├── Redux Persist                      │
│  └── Redux Saga for Side Effects        │
├─────────────────────────────────────────┤
│  Service Layer                          │
│  ├── 20 API Services                    │
│  ├── Navigation Service                 │
│  └── Storage Service                    │
├─────────────────────────────────────────┤
│  Component Layer                        │
│  ├── 90+ Reusable Components            │
│  ├── 59 Screen Components               │
│  └── Layout Components                  │
├─────────────────────────────────────────┤
│  Utilities & Hooks                      │
│  ├── Custom Hooks (19)                  │
│  ├── Utility Functions                  │
│  └── Theme System                       │
└─────────────────────────────────────────┘
```

### Integration Architecture
```
┌──────────────────┐
│   Mobile App     │
└────────┬─────────┘
         │
         ├──────────► Backend API (RESTful)
         │            └── Authentication
         │            └── Learning Content
         │            └── User Progress
         │
         ├──────────► Firebase
         │            ├── Cloud Messaging (FCM)
         │            ├── Analytics
         │            └── Remote Config
         │
         ├──────────► Notifee
         │            └── Local Notifications
         │
         └──────────► In-App Purchase
                      └── Subscription Management
```

### State Flow Architecture
```
User Action
    ↓
Component Dispatch
    ↓
Redux Action
    ↓
Redux Saga (Side Effects)
    ↓
API Call
    ↓
Response Processing
    ↓
Redux Reducer
    ↓
State Update
    ↓
Component Re-render
```

---

## 📱 Screen Inventory

### Authentication Screens (8)
1. `LoginScreen` - User login
2. `SendEmailGetId` - Forgot login ID
3. `CopyIDScreen` - Display recovered ID
4. `SendInfoGetPassword` - Forgot password
5. `ResetPassword` - Password reset
6. `CheckEmailScreen` - Email verification
7. `ConfirmPinCodeScreen` - PIN confirmation
8. `RegisterTrial` - Trial registration

### Learning Screens (24)
9. `ExercisesHomeScreen` - Exercise home
10. `StartScreen` - Exercise start
11. `ExerciseQuestionScreen` - Exercise questions
12. `FinishScreen` - Exercise completion
13. `ExcersiceTrainingQuestionScreen` - Training questions
14. `TrainingsScreen` - Training overview
15. `PractiveHomeScreen` - Practice home
16. `PractiveQuestionScreen` - Practice questions
17. `PractiveWrongQuestionScreen` - Wrong answer practice
18. `WrongHomeScreen` - Wrong answer home
19. `AnxietyHomeQuestion` - Anxiety practice
20. `ExamHomeScreen` - Exam home
21. `ExamQuestionScreen` - Exam questions
22. `FinishExamScreen` - Exam completion
23. `ExplanationExamScreen` - Exam explanations
24. `ExamTrainningQuestionScreen` - Exam training
25. `StartProficiencyExamScreen` - Proficiency exam start
26. `ProficiencyExamScreen` - Proficiency exam
27. `EndProficiencyExamScreen` - Proficiency exam end
28. `FinishProficiencyExamScreen` - Proficiency completion
29. `ExplanationProficiencyExamScreen` - Proficiency explanations
30. `MenuPractive` - Practice menu

### Resource Screens (4)
31. `VideosScreen` - Video list
32. `VideoDetailScreen` - Video player
33. `DigitalTextsScreen` - Digital text list
34. `DigitalTextDetailScreen` - Text viewer

### Community Screens (2)
35. `KnowledgeScreen` - Knowledge board list
36. `KnowledgeCommentScreen` - Comments and discussion

### Account & Settings Screens (13)
37. `HomeScreen` - Main dashboard
38. `AccountInfoScreen` - User profile
39. `EditEmailScreen` - Change email
40. `ConfirmEmail` - Email confirmation
41. `ChangeEmailResultScreen` - Email change result
42. `DeleteScreen` - Account deletion
43. `TermScreen` - Terms of service
44. `TempOfService` - Temporary terms
45. `TermTrialOfService` - Trial terms
46. `NotificationScreen` - Notification list
47. `DetailNotificationScreen` - Notification details
48. `ChooseScreen` - Selection screen
49. `WebViewScreen` - Web content viewer

### Subscription Screens (6)
50. `ConfirmTrialScreen` - Trial confirmation
51. `ExtendPlanPatternOne` - Plan extension option 1
52. `ConfirmExtendPlanPatternOne` - Confirm extension 1
53. `ExtendPlanPatternTwo` - Plan extension option 2
54. `ExtendPlanPatternThree` - Plan extension option 3
55. `ConfirmExtendPatternThree` - Confirm extension 3
56. `ConfirmExtendPlanInUse` - Confirm active plan extension
57. `ConfirmBuyVideo` - Video purchase confirmation

### Utility Screens (2)
58. `Error404` - Error handling
59. `SendEmailNoti` - Email notification

---

## 🔧 Development Features

### Build Variants
- **Development**: Development environment
- **Staging**: Staging environment
- **Production**: Production environment

### Platform-Specific Builds
- **Android**: APK and AAB generation
- **iOS**: IPA generation via Xcode

### Code Quality
- **ESLint**: Code linting with Airbnb TypeScript config
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Patch Package**: Dependency patching

### Development Tools
- **React Native Config**: Environment configuration
- **Metro Bundler**: JavaScript bundling
- **Babel**: JavaScript transpilation
- **Jest**: Testing framework

---

## 📊 Key Dependencies

### UI & Navigation
- `@react-navigation/*` - Navigation
- `react-native-vector-icons` - Icons
- `react-native-svg` - SVG support
- `react-native-flash-message` - Toast messages
- `react-native-spinkit` - Loading indicators

### Forms & Validation
- `react-hook-form` - Form management
- `yup` - Schema validation
- `@hookform/resolvers` - Form resolvers

### Media & Content
- `react-native-video` - Video playback
- `react-native-render-html` - HTML rendering
- `react-native-webview` - Web content
- `react-native-image-zoom-viewer` - Image viewing

### Firebase & Analytics
- `@react-native-firebase/app` - Firebase core
- `@react-native-firebase/messaging` - Push notifications
- `@react-native-firebase/analytics` - Analytics
- `@notifee/react-native` - Local notifications

### Utilities
- `axios` - HTTP client
- `moment` - Date handling
- `lodash` - Utility functions
- `i18next` - Internationalization
- `react-native-device-info` - Device information

---

## 🎨 UI Components

### Custom Components (90+)
The app includes a rich library of reusable components for:
- Form inputs and controls
- Lists and tables
- Cards and containers
- Buttons and actions
- Modals and dialogs
- Progress indicators
- Media players
- Navigation elements

---

## 🔐 Security Features

1. **Token-Based Authentication**: Secure JWT token management
2. **Password Encryption**: Secure password handling
3. **Deep Link Validation**: Expiration and signature checking
4. **Secure Storage**: Sensitive data encryption
5. **API Request Signing**: Request authentication
6. **Session Management**: Automatic token refresh

---

## 📈 Analytics & Tracking

1. **Firebase Analytics**: User behavior tracking
2. **Screen View Tracking**: Navigation analytics
3. **Event Tracking**: User action analytics
4. **Performance Monitoring**: App performance metrics
5. **Crash Reporting**: Error tracking

---

## 🌐 Internationalization

- **i18next Integration**: Multi-language support
- **React i18next**: React bindings
- **Language Resources**: Organized translation files
- **Dynamic Language Switching**: Runtime language changes

---

## 🔄 Offline Support

1. **Redux Persist**: State persistence
2. **AsyncStorage**: Local data caching
3. **Offline Queue**: API request queuing
4. **Cached Resources**: Downloaded content access

---

## 📝 Summary

KOJIRO is a feature-rich, production-ready mobile application for driving law education with:
- **59 screens** covering all aspects of learning and account management
- **20 API services** for comprehensive backend integration
- **22 Redux modules** for robust state management
- **Firebase integration** for push notifications and analytics
- **In-app purchases** for subscription management
- **Deep linking** for seamless user experience
- **Offline support** for uninterrupted learning
- **Multi-platform support** for iOS and Android

The app provides a complete learning ecosystem with exercises, practice tests, mock exams, proficiency tests, video tutorials, digital texts, and a knowledge-sharing community, all wrapped in a modern, user-friendly interface.
