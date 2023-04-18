import { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import AddClient from "../components/AddClient";
import TableCustomers from "../components/TableCustomers";
import TableAutoParts from "../components/TableAutoParts";
import Header from "../components/Header";

function Workspace() {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
      <Container p={2}>
        <Header />
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Clientes" fullWidth />
        <Tab label="Tabela de serviços" />
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
    </Container>
  );
}

export default Workspace;
