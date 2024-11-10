import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Container, Typography, Button, Stack } from "@mui/material";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/tasks" />;
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to the Fullstack To-Do App</Typography>
      <Typography variant="body1">Manage your tasks efficiently with our simple and intuitive interface.</Typography>
      <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
        <Link to="/register">
          <Button variant="contained" color="primary">Register</Button>
        </Link>
        <Link to="/login">
          <Button variant="contained" color="secondary">Login</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default Home;
