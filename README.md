Full Stack To-Do Application
This is a Full Stack To-Do Application built using Node.js, Express, MongoDB for the backend and React with Material UI for the frontend. The application allows users to register, login, create tasks, update tasks, mark tasks as complete, and delete tasks.

🌐 Live Demo
Frontend: https://to-do-task-akash.netlify.app/
Backend: https://full-stack-todo-application-pfeh.onrender.com
📂 Project Structure
plaintext
Copy code
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
└── README.md
🛠️ Tech Stack
Frontend: React, Material UI
Backend: Node.js, Express, MongoDB
Deployment: Netlify (Frontend), Render (Backend)
🚀 Features
User Authentication (Register/Login)
CRUD Operations for Tasks
Task Management (Create, Update, Delete, Mark Complete)
Responsive UI using Material UI
🖥️ Backend Setup
Prerequisites
Node.js (v18 or above)
MongoDB (Local or MongoDB Atlas)
Git
Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/iakash-singh/Full-Stack-ToDo-Application.git
cd Full-Stack-ToDo-Application/backend
Install dependencies:

bash
Copy code
npm install
Configure environment variables:

Create a .env file in the backend/ directory:

plaintext
Copy code
PORT=3000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
Run the server:

bash
Copy code
npm start
The backend server will start on http://localhost:3000.

🛠️ Backend Deployment
The backend is deployed on Render. You can configure deployment using your GitHub repository by linking it to Render.

Deployment URL: https://full-stack-todo-application-pfeh.onrender.com
Environment Variables (on Render):
MONGODB_URI: Your MongoDB connection string.
JWT_SECRET: Your JWT secret key.
🖼️ Frontend Setup
Prerequisites
Node.js (v18 or above)
Vite (for React project setup)
Instructions
Navigate to the frontend directory:

bash
Copy code
cd ../front_end
Install dependencies:

bash
Copy code
npm install
Configure environment variables:

Create a .env file in the front_end/ directory:

plaintext
Copy code
VITE_API_URL=https://full-stack-todo-application-pfeh.onrender.com
Run the frontend development server:

bash
Copy code
npm run dev
The frontend will be running on http://localhost:5173.

🛠️ Frontend Deployment
The frontend is deployed on Netlify. You can connect your GitHub repository to Netlify for continuous deployment.

Deployment URL: https://to-do-task-akash.netlify.app/
Build Settings:
Base Directory: front_end
Build Command: npm run build
Publish Directory: front_end/dist
🔄 Redeploying Your Frontend on Netlify
Go to the Netlify Dashboard and select your site.
Click on the "Deploys" tab.
Scroll down to the "Trigger deploy" section.
Click "Clear cache and deploy site" to redeploy the frontend.
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
Contributions are welcome! Feel free to fork the repository and submit a pull request.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m 'Add feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
