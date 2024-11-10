# 📋 Full Stack To-Do Application

A Full Stack To-Do Application built using **Node.js**, **Express**, **MongoDB** for the backend, and **React** with **Material UI** for the frontend. The application includes user registration, login, task creation, updates, and management features with a responsive UI.

## 🌐 Live Demo

- **Live Demo**: [https://to-do-task-akash.netlify.app/](https://to-do-task-akash.netlify.app/)

## 📂 Project Structure

```plaintext
Full-Stack-ToDo-Application/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── .env
├── front_end/
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
└── README.md ```

🛠️ Tech Stack
Frontend: React, Material UI
Backend: Node.js, Express, MongoDB
Deployment: Netlify (Frontend), Render (Backend)

🚀 Features
User Authentication (Register/Login)
CRUD Operations for Tasks
Task Management (Create, Update, Delete, Mark Complete)
Responsive UI with Material UI components
🖥️ Backend Setup
Prerequisites
Node.js (v18 or above)
MongoDB (Local or MongoDB Atlas)
Git
Instructions

1. Clone the repository:
git clone https://github.com/iakash-singh/Full-Stack-ToDo-Application.git
cd Full-Stack-ToDo-Application/backend

2. Install dependencies:
npm install

3. Configure environment variables:
Create a .env file in the backend/ directory with the following content:
PORT=3000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>

4. Run the server:
npm start
The backend server will start on http://localhost:3000.

🛠️ Backend Deployment
The backend is deployed on Render. Link your GitHub repository to Render for continuous deployment.
Deployment URL: https://full-stack-todo-application-pfeh.onrender.com
Environment Variables (on Render):
MONGODB_URI: Your MongoDB connection string.
JWT_SECRET: Your JWT secret key.

🖼️ Frontend Setup
Prerequisites
Node.js (v18 or above)
Vite (for React project setup)

Instructions
1. Navigate to the frontend directory:
cd ../front_end

2. Install dependencies:
npm install

3. Configure environment variables:
Create a .env file in the front_end/ directory:
VITE_API_URL=https://full-stack-todo-application-pfeh.onrender.com

4. Run the frontend development server:
npm run dev
The frontend will be running on http://localhost:5173.

🛠️ Frontend Deployment
The frontend is deployed on Netlify. Connect your GitHub repository to Netlify for continuous deployment.
Deployment URL: https://to-do-task-akash.netlify.app/
Build Settings:
Base Directory: front_end
Build Command: npm run build
Publish Directory: front_end/dist

🔄 Redeploying Your Frontend on Netlify
Go to the Netlify Dashboard and select your site.
Click on the Deploys tab.
Scroll down to the Trigger deploy section.
Click Clear cache and deploy site.

🌟 API Endpoints
Authentication
POST /api/users/register - Register a new user
POST /api/users/login - Login a user
Tasks
GET /api/tasks - Fetch all tasks for the authenticated user
POST /api/tasks - Create a new task
PUT /api/tasks/:id - Update a task
DELETE /api/tasks/:id - Delete a task
PUT /api/tasks/:id/complete - Mark a task as complete

🤝 Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
  git checkout -b feature-branch
3.Make your changes and commit:
  git commit -m 'Add new feature
4. Push to the branch:
  git push origin feature-branch
5. Open a pull request.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

💬 Feedback
If you have any feedback, please reach out at akashsingh7202@gmail.com.

