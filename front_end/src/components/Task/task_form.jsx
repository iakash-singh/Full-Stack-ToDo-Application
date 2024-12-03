import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, MenuItem, Container, Typography } from "@mui/material";

const TaskInputForm = ({ refreshTasks }) => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    level: "",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post(`${import.meta.env.VITE_API_URL}/api/tasks`, taskDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      refreshTasks();
      setTaskDetails({ title: "", description: "", level: "low", dueDate: "" });
    } catch (error) {
      alert("Error adding task: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <Container>
      <Typography variant="h5">Add New Task</Typography>
      <form onSubmit={handleTaskSubmit}>
        <TextField
          name="title"
          label="Title"
          fullWidth
          margin="normal"
          value={taskDetails.title}
          onChange={handleInputChange}
          required
        />
        <TextField
          name="description"
          label="Description"
          fullWidth
          margin="normal"
          value={taskDetails.description}
          onChange={handleInputChange}
        />
        <TextField
          select
          name="level"
          label="Priority"
          fullWidth
          margin="normal"
          value={taskDetails.level}
          onChange={handleInputChange}
        >
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </TextField>
        <TextField
          name="dueDate"
          label="Due Date"
          type="date"
          fullWidth
          margin="normal"
          value={taskDetails.dueDate}
          onChange={handleInputChange}
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Task
        </Button>
      </form>
    </Container>
  );
};

export default TaskInputForm;
