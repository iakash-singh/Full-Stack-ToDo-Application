import React, { useContext } from "react";
import TaskList from "../components/Task/task_list";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "./task.css";

const Tasks = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert("You have been logged out successfully.");
    navigate("/login");
  };

  return (
    <div className="tasks-container">
      <h2 className="tasks-heading">Your Task Dashboard</h2>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <TaskList />
    </div>
  );
};

export default Tasks;
