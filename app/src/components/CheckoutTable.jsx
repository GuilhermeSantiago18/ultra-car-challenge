import { Button, Container, FormControl, TextField, Typography, Grid } from '@mui/material';
import React, { useState } from 'react'
import { getAll } from '../service/api';
import Header from './Header';
import TableCustomers from './TableCustomers';
import TableAutoParts from './TableAutoParts';
import FinalTableAutoParts from './FinalTableCheckout';
import FinalTableCustomer from './FinalTableCustomer';

export default function CheckoutTable() {
  const [searchInput, setSearchInput] = useState("");
  const [customer, setCustomer] = useState([]);
  const [autoParts, setAutoParts] = useState([]);

  const handleSearchLicense = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await getAll("customer1");
      const clientInformations = data.filter((client) => client.license === searchInput);
      setCustomer(clientInformations)
      const parts = await getAll("parts5");
      const autoPartsInformations = parts.data.filter((autoParts) => autoParts.license === searchInput);
      setAutoParts(autoPartsInformations)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Header />
      <FormControl onSubmit={handleSearchSubmit}>
        <TextField
          label="Digite a placa do carro"
          variant="outlined"
          value={searchInput}
          onChange={handleSearchLicense}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }} onClick={handleSearchSubmit}>
          Buscar
        </Button>
      </FormControl>
      {customer.length > 0 && autoParts.length > 0 && (
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={16}>
            <Typography variant="h5">Informações do Cliente</Typography>
            <FinalTableCustomer customer={customer} />
          </Grid>
          <Grid item xs={12} md={16}>
            <Typography variant="h5">Informações das Peças</Typography>
            <FinalTableAutoParts autoParts={autoParts}/>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}
