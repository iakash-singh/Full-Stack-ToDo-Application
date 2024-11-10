import React, { useContext } from "react";
import TaskList from "../components/Task/task_list";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Container, Button, Typography } from "@mui/material";

const Tasks = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Tasks</Typography>
      <Button onClick={handleLogout} variant="contained" color="error" sx={{ mb: 2 }}>
        Logout
      </Button>
      <TaskList />
    </Container>
  );
};

export default Tasks;
