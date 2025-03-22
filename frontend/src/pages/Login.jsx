import { useState, useContext } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/users/login",
        formData
      );
      console.log(res.data);
      login(res.data.token);
      navigate("/main");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh", // Toma el 100% de la altura de la pantalla
        display: "flex",
        alignItems: "center", // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
      }}
    >
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Iniciar sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Iniciar sesión
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
