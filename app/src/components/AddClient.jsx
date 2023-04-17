import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { requestNewCustomer } from "../service/api";

export default function AddClient() {
  const [name, setName] = useState('')
  const [CPF, setCPF] = useState('')

  const handleChangeName = ({target}) => {
    setName(event.target.value)
    
  }

  const handleChangeCPF = ({target}) => {
    setCPF(event.target.value)
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      CPF,
    }
    await requestNewCustomer(data)
  };
  return (
    <Box display="flex">
      <Box>
        <TextField label="Nome do Cliente" variant="outlined" value={name} onChange={handleChangeName}/>
        <TextField label="CPF" variant="outlined" value={CPF} onChange={handleChangeCPF}/>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Adicionar Cliente
        </Button>
      </Box>
    </Box>
  );
}
