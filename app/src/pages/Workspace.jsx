import { useState } from "react";
import { Box, Button, ImageList, Tab, Tabs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddClient from "../components/AddClient";
import TableCustomers from "../components/TableCustomers";
import TableEmployees from "../components/TableEmployees";
import theme from "../themes/theme";

function Workspace() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box width="100%" bgcolor="white">
      <Box justifyContent="space-between" p={2}>
        <Button
          variant="contained"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          Logout
        </Button>
      </Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Clientes do dia" fullWidth />
        <Tab label="Funcionários" />
        <Tab label="Adicionar novo cliente" />
      </Tabs>
      {value === 0 && (
        <Box p={2}>
          <Typography variant="h6">{<TableCustomers />}</Typography>
        </Box>
      )}
      {value === 1 && (
        <Box p={2}>
          <Typography variant="h6">{<TableEmployees />}</Typography>
        </Box>
      )}
      {value === 2 && (
        <Box p={2}>
          <Typography variant="h6">{<AddClient />}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Workspace;
