import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar
          alt="Logo"
          src="/logo192.png"
          sx={{ width: 40, height: 40, marginRight: 2 }}
        />
        {/* <Typography variant="h6" sx={{ flexGrow: 1 }}>
          NextStep Blog
        </Typography> */}
        <Button color="inherit" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate("/main")}>
          Main
        </Button>
        <Button color="inherit" onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button color="inherit" onClick={() => navigate("/register")}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
