import React, { useContext } from "react";
import TaskList from "../components/Task/task_list";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Container, Button, Typography, Box } from "@mui/material";

const Tasks = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" color="secondary">
          Your Tasks
        </Typography>
        <Button onClick={handleLogout} variant="contained" color="error" sx={{ borderRadius: 4 }}>
          Logout
        </Button>
      </Box>
      <TaskList />
    </Container>
  );
};

export default Tasks;
