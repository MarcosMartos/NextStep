import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1E3A8A", // Azul oscuro
    },
    secondary: {
      main: "#df3d3d", // Rosa oscuro
    },
    background: {
      default: "#f5f5f5", // Fondo claro
      paper: "#ffffff", // Fondo de tarjetas blanco
    },
    text: {
      primary: "#212121", // Texto oscuro
      secondary: "#757575", // Texto gris
    },
  },
});

export default theme;
