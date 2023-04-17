import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function AddClient() {
  return (
    <Box display="flex">
      <Box>
        <Typography variant="h6">Clientes do Dia</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Atendimento</Typography>
        <form>
          <TextField label="Nome do Cliente" variant="outlined" />
          <TextField label="CPF" variant="outlined" />
          <Button variant="contained" type="submit">
            Adicionar Cliente
          </Button>
        </form>
      </Box>
    </Box>
  );
}
