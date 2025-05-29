# 🚀 Task Management API

A powerful and modular RESTful API built with **Node.js**, **Express**, **MongoDB**, and **Redis**, providing user authentication and task management capabilities.

---

## 🛠 Features

- 🔐 User Authentication (JWT-based)
- ✅ CRUD operations for Tasks
- 📌 Task status management (Locked, Completed, etc.)
- ⚡ Redis integration for caching and rate-limiting
- 📁 Organized modular folder structure
- 📄 API documentation with Swagger and Postman

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Redis (ioredis)
- JWT
- Swagger UI
- Postman

---

## 📦 Installation

```bash
git clone https://github.com/your-username/Task-Management.git
cd Task-Management
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
```

---

## ▶️ Run the App

```bash
npm start
```

Or with `nodemon`:

```bash
npm run dev
```

---

## 📮 API Documentation

### 🔗 Swagger UI  
Access your live interactive API docs here:  
👉 [Swagger Docs](https://task-managment-6r8i.onrender.com/document/)

### 📬 Postman Collection  
Import the full API collection into Postman from this link:  
👉 [Postman Collection]([https://www.postman.com/your-postman-link](https://www.postman.com/teamwork-4920/workspace/my-workspace/collection/38477852-20553109-c11c-43e0-88d9-a2343c1452e4?action=share&creator=38477852))

---

## 🔒 Task Lock Logic

Each task has a `locked` field. To modify or delete a task, it must not be locked. This ensures task state integrity.

---

## 🧠 Author

Made with ❤️ by [Your Name](https://github.com/mohammadkh24)
