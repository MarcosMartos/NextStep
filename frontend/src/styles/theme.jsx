import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Azul claro
    },
    secondary: {
      main: "#f48fb1", // Rosa claro
    },
    background: {
      default: "#121212", // Fondo oscuro
      paper: "#1e1e1e", // Fondo de tarjetas oscuro
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
});

export default theme;
