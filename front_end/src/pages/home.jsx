import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Container, Typography, Button, Stack, Box } from "@mui/material";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/tasks" />;
  }

  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Box mb={3}>
        <Typography variant="h3" color="secondary" gutterBottom>
          Welcome to the Fullstack To-Do App
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Manage your tasks efficiently with our simple and intuitive interface.
        </Typography>
      </Box>
      <Stack spacing={2} direction="row" justifyContent="center" sx={{ mt: 2 }}>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 4 }}>
            Register
          </Button>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary" sx={{ borderRadius: 4 }}>
            Login
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default Home;
