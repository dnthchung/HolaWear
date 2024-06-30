# HolaWear

### Back End

> `npm start` - http://localhost:9999/

    └── backend/
        ├── controllers/
        │   ├── index.js
        │   ├── authContr oller.js
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

### Front End

> `npm run dev` - http://localhost:5173/

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
