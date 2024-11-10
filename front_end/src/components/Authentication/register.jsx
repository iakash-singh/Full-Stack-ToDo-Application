import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, formData);
      alert("User registered successfully!");
      navigate("/login");
    } catch (error) {
      alert("Registration failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom color="secondary">
          Register
        </Typography>
        <Typography variant="body1" gutterBottom color="textSecondary">
          Create an account to get started with our platform.
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
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
