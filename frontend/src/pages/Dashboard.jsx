import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Button, Typography } from "@mui/material";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Typography variant="h4">Dashboard</Typography>
      <Button onClick={logout} variant="contained" color="secondary">
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
