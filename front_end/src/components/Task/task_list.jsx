import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./task_item";
import TaskInputForm from "./task_form";
import { Container, Typography, Grid, Box } from "@mui/material";

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
      return a.priority === "high" && b.priority === "low" ? -1 : 1; // Sort by priority
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" color="primary" gutterBottom>
          Task List
        </Typography>
        <Typography color="textSecondary">
          Keep track of your tasks by adding, updating, and marking them as complete.
        </Typography>
      </Box>
      <TaskInputForm refreshTasks={fetchTasks} />
      <Grid container spacing={2} mt={2}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Grid item xs={12} md={6} key={task._id}>
              <TaskItem task={task} fetchTasks={fetchTasks} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box textAlign="center" mt={4} color="textSecondary">
              <Typography>No tasks available. Add a new task to get started.</Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default TaskList;
