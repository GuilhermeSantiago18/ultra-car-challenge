import { useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddClient from "../components/AddClient";
import TableCustomers from "../components/TableCustomers";
import TableAutoParts from "../components/TableAutoParts";
import Header from "../components/Header";

function Workspace() {
  const [value, setValue] = useState(0);

  const navigate = useNavigate()

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  const handleCLick = () => {
    navigate('/checkout')
  }


  return (
      <Box justifyContent="space-between" p={2} sx={12}>
           <Header />
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Clientes" fullWidth />
        <Tab label="Tabela de peças" />
        <Tab label="Adicionar novo cliente" />
      </Tabs>
      {value === 0 && (
        <Box p={2}>
          <Typography variant="h6">{<TableCustomers />}</Typography>
        </Box>
      )}
      {value === 1 && (
        <Box p={2}>
          <Typography variant="h6">{<TableAutoParts />}</Typography>
        </Box>
      )}
      {value === 2 && (
        <Box p={2}>
          <Typography variant="h6">{<AddClient />}</Typography>
        </Box>
      )}
      <Button variant="contained" onClick={handleCLick}>Finalizar Atendimento</Button>
    </Box>
  );
}

export default Workspace;
