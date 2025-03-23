import {
  AppBar,
  Toolbar,
  Button,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <AppBar position="static" sx={{ padding: { xs: 1, sm: 1 } }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo que redirige a la página principal */}
        <Box
          component="img"
          src="https://res.cloudinary.com/df4ghpsiz/image/upload/v1742661142/Group_2_ixliul.png"
          alt="Logo"
          onClick={() => navigate("/main")} // ✅ Redirige a la página principal
          sx={{
            width: 70,
            height: 50,
            borderRadius: 0,
            marginRight: 2,
            objectFit: "cover",
            cursor: "pointer", // ✅ Hace que el logo sea clickeable
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 0.8, // ✅ Efecto de opacidad al pasar el mouse
            },
          }}
        />
        {/* Barra de búsqueda */}
        <TextField
          variant="outlined"
          placeholder="Buscar..."
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            width: { xs: "100%", sm: "300px" }, // ✅ Responsive para móviles y pantallas grandes
            backgroundColor: "#ffffff",
            borderRadius: 2,
            "& input": {
              padding: "10px",
            },
            "& fieldset": {
              borderColor: "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#888",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#555",
            },
          }}
        />
        {/* Botones de navegación */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" onClick={() => navigate("/main")}>
            Inicio
          </Button>
          {/* <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate("/register")}>
            Registro
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
