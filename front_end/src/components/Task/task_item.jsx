import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, TextField, Select, MenuItem, Box } from "@mui/material";

const TaskItem = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/tasks/${task._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Task deleted successfully!");
      fetchTasks();
    } catch (error) {
      alert("Failed to delete task");
    }
  };

  const handleToggleComplete = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/tasks/${task._id}`,
        { completed: !task.completed },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      fetchTasks();
    } catch (error) {
      alert("Failed to update task");
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/tasks/${task._id}`,
        updatedTask,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Task updated successfully!");
      fetchTasks();
      setIsEditing(false);
    } catch (error) {
      alert("Failed to update task");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  return (
    <Card variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>
        {isEditing ? (
          <Box>
            <TextField
              name="title"
              label="Title"
              fullWidth
              value={updatedTask.title}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              sx={{ borderRadius: 2 }}
            />
            <TextField
              name="description"
              label="Description"
              fullWidth
              value={updatedTask.description}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              sx={{ borderRadius: 2 }}
            />
            <Select
              name="priority"
              value={updatedTask.priority}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ borderRadius: 2 }}
            >
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
            <TextField
              name="dueDate"
              label="Due Date"
              type="date"
              fullWidth
              value={updatedTask.dueDate ? new Date(updatedTask.dueDate).toISOString().split("T")[0] : ""}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              margin="normal"
              variant="outlined"
              sx={{ borderRadius: 2 }}
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button onClick={handleUpdate} variant="contained" color="primary" sx={{ borderRadius: 2 }}>
                Save
              </Button>
              <Button onClick={() => setIsEditing(false)} variant="text" sx={{ borderRadius: 2 }}>
                Cancel
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography variant="h6" color="primary">{task.title}</Typography>
            <Typography variant="body1">{task.description || "No description"}</Typography>
            <Typography variant="body2">Priority: {task.priority}</Typography>
            <Typography variant="body2">Due Date: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No due date"}</Typography>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button onClick={() => setIsEditing(true)} variant="outlined" sx={{ borderRadius: 2 }}>
                Edit
              </Button>
              <Button onClick={handleDelete} color="error" variant="outlined" sx={{ borderRadius: 2 }}>
                Delete
              </Button>
              <Button onClick={handleToggleComplete} color="secondary" variant="outlined" sx={{ borderRadius: 2 }}>
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </Button>
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskItem;
