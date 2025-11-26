
Account Management System (MERN Stack)

A simple and clean Account Management Application built using the MERN Stack (MongoDB, Express, React, Node.js).
Users can register, log in, view their profile, and update their account information.

Features:
- User Registration & Login
- JWT-based Authentication
- Encrypted Passwords (bcrypt)
- View Profile
- Update Account Information
- Protected API Routes
- React (Bootstrap UI)
- Express Backend
- MongoDB Database

Project Structure:
acc_mng/
  backend/
    config/
    controllers/
    middleware/
    models/
    routes/
    server.js
    package.json

  frontend/
    public/
    src/
      pages/
      components/
      api.js
      App.js
      index.js
    package.json

Backend Setup:
1. cd backend
2. npm install
3. Create .env:
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
4. npm run dev

Frontend Setup:
1. cd frontend
2. npm install
3. npm start

API Endpoints:
Auth Routes:
POST /api/users/register
POST /api/users/login

User Routes:
GET /api/users/profile
PUT /api/users/profile

Built With:
- React (v18+)
- Node.js
- Express.js
- MongoDB
- Bootstrap 5
- Axios
- JWT & Bcrypt

License:
Open-source and free to use.

