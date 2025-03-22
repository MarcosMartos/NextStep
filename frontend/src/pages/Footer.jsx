import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 2,
        backgroundColor: "primary.main", // Color de fondo
        color: "white", // Color de texto
        mt: 4, // Margen superior para separar del contenido
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} NextStep. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
