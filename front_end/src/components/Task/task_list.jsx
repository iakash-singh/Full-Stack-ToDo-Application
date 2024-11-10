import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./task_item";
import TaskForm from "./task_form";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/tasks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const sortedTasks = sortTasks(response.data);
      setTasks(sortedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error.response?.data?.message || error.message);
      alert("Failed to fetch tasks");
    }
  };

  const sortTasks = (tasks) => {
    
    return tasks
      .sort((a, b) => {
        if (a.completed !== b.completed) {
          return a.completed ? 1 : -1; 
        }
        return a.priority === "high" && b.priority === "low" ? -1 : 1; 
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <TaskForm fetchTasks={fetchTasks} />
      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />)
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;