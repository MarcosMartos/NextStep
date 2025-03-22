import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          src="https://res.cloudinary.com/df4ghpsiz/image/upload/v1742661142/Group_2_ixliul.png"
          alt="Logo"
          sx={{
            width: 70,
            height: 50,
            borderRadius: 0, // Si lo quieres cuadrado
            marginRight: 2,
            objectFit: "cover",
          }}
        />
        {/* <Button color="inherit" onClick={() => navigate("/main")}>
          Main
        </Button> */}
        {/* <Button color="inherit" onClick={() => navigate("/login")}>
          Login
        </Button> */}
        {/* <Button color="inherit" onClick={() => navigate("/register")}>
          Register
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
