# MERN User Management Project

This is a MERN (MongoDB, Express.js, React.js, Node.js) project that allows users to be added and viewed. It includes both frontend and backend, with support for Docker deployment.

## Features

✅ User Registration – Add users with name, email, and password.  
✅ User Listing – Fetch and display a list of users.  
✅ MongoDB Database – Stores user data in MongoDB Atlas/local instance.  
✅ Docker Support – Deploy with Docker.  
✅ CORS Enabled – Supports API calls from frontend.  

## Technologies Used

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js, Mongoose  
- **Database:** MongoDB (Atlas or Local)  
- **Deployment:** Docker, Nginx  

---

## Backend Setup

### 1. Project Structure
```
backend/
│── models/
│   ├── User.js
│── server.js
│── package.json
│── .env
│── Dockerfile
```

### 2. .env File (Backend Configuration)
Create a `.env` file in the backend folder and add:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mernDB?retryWrites=true&w=majority
```
Replace `<username>` and `<password>` with your actual MongoDB credentials.

### 3. Install Dependencies
```sh
cd backend
npm install
```

### 4. Start the Server
```sh
npm start
```
Runs the backend on `http://localhost:5000`

### 5. API Endpoints

| Method | Endpoint  | Description  |
|--------|----------|--------------|
| GET    | `/`      | Test API      |
| POST   | `/users` | Add User      |
| GET    | `/users` | Get Users     |

### 6. Run Backend in Docker
```sh
docker build -t mern-backend .
docker run -p 5000:5000 mern-backend
```

---

## Frontend Setup

### 1. Project Structure
```
frontend/
│── src/
│   ├── components/
│   │   ├── UserForm.js
│   │   ├── UserList.js
│   ├── App.js
│   ├── index.js
│── .env
│── package.json
│── Dockerfile
```

### 2. .env File (Frontend Configuration)
Create a `.env` file in the frontend folder and add:
```
REACT_APP_API_URL=http://localhost:5000
```

### 3. Install Dependencies
```sh
cd frontend
npm install
```

### 4. Start Frontend
```sh
npm start
```
Runs the frontend on `http://localhost:3000`

### 5. Run Frontend in Docker
```sh
docker build -t mern-frontend .
docker run -p 3000:80 mern-frontend
```

---

## Full Project Deployment

### 1. Run Backend & Frontend Together
```sh
docker network create mern-network

# Run Backend
cd backend
docker build -t mern-backend .
docker run -d --network mern-network --name backend -p 5000:5000 mern-backend

# Run Frontend
cd ../frontend
docker build -t mern-frontend .
docker run -d --network mern-network --name frontend -p 3000:80 mern-frontend
```

### 2. Access the Application
- **Frontend:** `http://localhost:3000`  
- **Backend API:** `http://localhost:5000`

---

## Author

Developed by **Anilreddy Goguri** 🚀

## License

This project is licensed under the **MIT License**.

---

## Final Notes

- Make sure MongoDB Atlas is set up correctly if using a cloud database.
- Update `.env` files with correct API URLs when deploying.
- Use `docker ps` to check running containers and `docker logs <container_id>` for debugging.

🚀 **Happy Coding!** 🎉
