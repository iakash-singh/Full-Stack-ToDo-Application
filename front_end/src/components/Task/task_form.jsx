import React, { useState } from "react";
import axios from "axios";

const TaskInputForm = ({ refreshTasks }) => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    desc: "",
    level: "low",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Adding new task:", taskDetails);
      await axios.post("http://localhost:3000/api/tasks", taskDetails, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Task added successfully!");
      refreshTasks();
      setTaskDetails({ title: "", desc: "", level: "low", dueDate: "" });
    } catch (error) {
      console.log("Error adding task:", error.response?.data?.message || error.message);
    }
  };

  return (
    <form onSubmit={handleTaskSubmit}>
      <input name="title" placeholder="Title" value={taskDetails.title} onChange={handleInputChange} required />
      <input name="desc" placeholder="Description" value={taskDetails.desc} onChange={handleInputChange} />
      <select name="level" value={taskDetails.level} onChange={handleInputChange}>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
      <input name="dueDate" type="date" value={taskDetails.dueDate} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInputForm;
