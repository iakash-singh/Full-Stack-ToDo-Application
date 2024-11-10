import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const API_URL = `${import.meta.env.VITE_API_URL}/api/users/login`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, formData);
      login(response.data.token);
      alert("Login successful!");
      navigate("/tasks");
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom color="secondary">
          Login
        </Typography>
        <Typography variant="body1" gutterBottom color="textSecondary">
          Please enter your credentials to access your account.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
            variant="outlined"
            sx={{ borderRadius: 2 }}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            onChange={handleChange}
            required
            variant="outlined"
            sx={{ borderRadius: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"  // Set to secondary color for contrast
            fullWidth
            sx={{ mt: 2, borderRadius: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
