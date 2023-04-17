import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddClient from "../components/AddClient";
import TableCustomers from "../components/TableCustomers";
import TableEmployees from "../components/TableEmployees";

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
    <Box>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Typography variant="body1" onClick={handleLogout} style={{ cursor: "pointer" }}>
          Logout
        </Typography>
      </Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Clientes do dia" />
        <Tab label="Funcionários Atendendo" />
      </Tabs>
      {value === 0 && (
        <Box p={2}>
          <Typography variant="h6">{<TableCustomers />}</Typography>
          {/* Adicione aqui o código para exibir os clientes do dia */}
        </Box>
      )}
      {value === 1 && (
        <Box p={2}>
          <Typography variant="h6">{<TableEmployees />}</Typography>
          {/* Adicione aqui o código para exibir os funcionários que estão atendendo */}
        </Box>
      )}

    </Box>
   
  );
}

export default Workspace;
