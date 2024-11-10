import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/authContext";
import Home from "./pages/home";
import Register from "./components/Authentication/register";
import Login from "./components/Authentication/login";
import Tasks from "./pages/tasks";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = React.useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
