# **HolaWear**

**SDN301m Project - SE1740-NJ**

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

---

## **Project Members**

| **Name**          | **Student ID** | **Role**              |
| ----------------- | -------------- | --------------------- |
| Doan Thanh Chung  | HE176077       | Team Lead, Full Stack |
| Van Minh Tuan     | HE170999       | Full Stack            |
| Nguyen Thanh Tung | HE172838       | Back End              |
| Ha Van Manh       | HE176110       | Full Stack            |
| Do Duc Thien      | HE176216       | Full Stack            |

## **Overview**

**HolaWear** is a professional e-commerce web application for purchasing clothing. It supports roles like Admin, Seller, and User, enabling product management, sales tracking, and user interaction. The platform ensures a seamless shopping experience with a responsive design, secure authentication, and modern UI components.

## **Demo Links**

- **[Demo Video 1](#)**

## **Technologies Used**

- **Frontend:** `ReactJS`, `Tailwind CSS`, `Shadn UI`
- **Backend:** `NodeJS`, `ExpressJS`, `Mongoose`, `JWT`
- **Database & Storage:** `MongoDB Atlas(+ local)`, `Cloudinary`
- **Architecture:** `MERN Stack`

## **Key Features**

HolaWear is a full-stack e-commerce platform for clothing with the following key characteristics:

**1. Architecture:**

* MERN Stack (MongoDB, Express.js, React, Node.js)
* Mobile app in Android XML (Java)
* Uses Tailwind CSS and Shadcn UI for frontend styling

**2. Core Features:**

* Multi-role system (Admin, Seller, User)
* Product catalog with categories, brands, and filters
* Shopping cart and checkout system
* User authentication and profile management
* Order tracking
* Wishlist functionality

**3. Technical Highlights:**

* JWT-based authentication
* REST API architecture
* Cloud storage integration (MongoDB Atlas, Cloudinary)
* Responsive design
* Mobile app with Retrofit for API communication

**4. Security Features:**

* Protected routes based on user roles
* Secure password handling with bcrypt
* JWT token management
* Cookie-based authentication

## **Folder Structure**

### **Backend**

<details>
<summary><strong>Folder Structure</strong></summary>

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
    ├── routes/
    │   ├── index.js
    │   ├── authRoute.js
    │   ├── userRoute.js
    │   └── ...
    ├── .env
    ├── .prettierrc
    ├── note_BE.txt
    ├── package-lock.json
    ├── package.json
    └── server.js
```

</details>

### **Frontend**

<details>
<summary><strong>Folder Structure</strong></summary>

```plaintext
└── frontEnd/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── axios/
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
    │   ├── lib/
    │   ├── pages/
    │   │   ├── admin/
    │   │   │   ├── dashboard.jsx
    │   │   │   ├── manageProduct.jsx
    │   │   │   └── ...
    │   │   ├── seller/
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

## **Demo Images**

<details>
<summary><strong>Expand to View Screenshots</strong></summary>

1. ![Demo Image 1](https://github.com/dnthchung/HolaWear/blob/main/image%20demo/Screenshot1.png?raw=true)
2. ![Demo Image 2](https://github.com/dnthchung/HolaWear/blob/main/image%20demo/Screenshot2.png?raw=true)
3. ![Demo Image 3](https://github.com/dnthchung/HolaWear/blob/main/image%20demo/Screenshot3.png?raw=true)
4. ![Demo Image 4](https://github.com/dnthchung/HolaWear/blob/main/image%20demo/Screenshot4.png?raw=true)
5. ![Demo Image 5](https://github.com/dnthchung/HolaWear/blob/main/image%20demo/Screenshot5.png?raw=true)
6. ![Demo Image 6](https://github.com/dnthchung/HolaWear/blob/main/image%20demo/Screenshot6.png?raw=true)
7. ![Demo Image 7](https://github.com/dnthchung/HolaWear/blob/main/image%20demo/Screenshot7.png?raw=true)
8. ![Demo Image 8](https://github.com/dnthchung/HolaWear/blob/main/image%20demo/Screenshot8.png?raw=true)

</details>

---

This project was developed as part of the SDN301m course, focusing on building a full-stack web application with a high level of professionalism and modern best practices.
