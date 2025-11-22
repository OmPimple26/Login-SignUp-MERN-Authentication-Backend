# Login-SignUp-MERN-Authentication-Backend
🔐 MERN Authentication Backend built with Node.js, Express, and MongoDB. It provides secure user signup/login, JWT-based auth, password validation, middleware protection, and clean APIs. Perfect for modern web apps needing reliable user authentication. 🚀🔥

## 🔗 Live Backend Deployment

### 🚀 API Base URL:

https://login-signup-mern-authentication-backend.onrender.com/

## ✨ Features

🔐 Secure User Authentication using JWT

📝 User Signup & Login APIs

🧂 Password Hashing with bcrypt

🔑 JWT Token Verification Middleware

🍃 MongoDB Database Integration (Mongoose)

⚡ Express.js REST API Architecture

🛡 CORS enabled

📦 Clean and scalable folder structure

## 📁 Project Structure
Controllers/
    └── AuthController.js
Middlewares/
    ├── Auth.js
    └── AuthValidation.js
Models/
    ├── db.js
    └── User.js
Routes/
    ├── AuthRouter.js
    └── ProductRouter.js
.gitignore
index.js
LICENSE
package-lock.json
package.json
README.md

## 🚀 Getting Started
1️⃣ Clone the repository
```
git clone https://github.com/OmPimple26/Login-SignUp-MERN-Authentication-Backend.git
cd Login-SignUp-MERN-Authentication-Backend
```

2️⃣ Install dependencies
```
npm install
```

3️⃣ Create a .env file

Add:

```
MONGO_CONN=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8080
```

4️⃣ Start the server
```
npm start
```


or for development:

```
npm run dev
```

## 🔗 API Endpoints
### Auth Routes

Method	Endpoint	Description
POST	/auth/signup	Register a new user
POST	/auth/login	Login user & return JWT token
GET	/auth/user	Get logged-in user details (Protected)


## 🛡 Protected Route Example

Add the JWT token in headers:

```
Authorization: your_jwt_token
```

## 🌐 Deployment

This backend supports hosting on:

Render 🟣

Railway 🚂

Cyclic.sh 🔄

Vercel (Serverless) ⚡

Just add your environment variables in the hosting dashboard.

## 🤝 Contributing

You are welcome to open issues or submit pull requests.

## 🧑‍💻 Author

Om Pimple
Backend for Login-Signup MERN Authentication System.
