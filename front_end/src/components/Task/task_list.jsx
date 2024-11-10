import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./task_item";
import TaskInputForm from "./task_form";
import { Container, Typography, Grid } from "@mui/material";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const sortedTasks = sortTasks(response.data);
      setTasks(sortedTasks);
    } catch (error) {
      alert("Error fetching tasks: " + (error.response?.data?.message || error.message));
    }
  };

  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1; // Move completed tasks to the bottom
      }
      return a.level === "high" && b.level === "low" ? -1 : 1; // Sort by priority
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Task List
      </Typography>
      <TaskInputForm refreshTasks={fetchTasks} />
      <Grid container spacing={2}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Grid item xs={12} md={6} key={task._id}>
              <TaskItem task={task} fetchTasks={fetchTasks} />
            </Grid>
          ))
        ) : (
          <Typography align="center" color="textSecondary">
            No tasks available. Add a new task to get started.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default TaskList;
