import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenido a NextStep
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Comparte tus conocimientos y descubre nuevas ideas con la comunidad.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
            onClick={() => navigate("/register")}
          >
            Registrarse
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
