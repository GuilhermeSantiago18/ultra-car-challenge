import { Box, TextField, Button, Select, MenuItem, FormControl, Stack, FormLabel, InputLabel } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { insert } from "../service/api.js";


const EMPLOYEES = ['Joao', 'Felipe', 'Maria', 'Sandra'];

export default function AddClient() {
  const [queryData, setQueryData] = useState({});

  const navigate = useNavigate()


  const handleChange = (event) => {
    const { name, value } = event.target;
    setQueryData({ ...queryData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentTime = new Date();
    const formattedTime = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
    const data = {
      name: queryData.customerName,
      cpf: queryData.CPF,
      responsable: queryData.responsable,
      license: queryData.license,
      phone: queryData.phone,
      entryTime: formattedTime,
      outTime: 'Serviço em andamento',
    };
    await insert('customer10', data);
    navigate(0)
  };

  return (
    <Stack spaci>
        <FormControl>
        <TextField
          label="Nome do Cliente"
          variant="outlined"
          name="customerName"
          onChange={handleChange}
          sx={{mb: 1}}
        />
        <TextField
          label="CPF"
          variant="outlined"
          name="CPF"
          onChange={handleChange}
          sx={{mb: 1}}
        />
          <TextField
          label="Placa"
          variant="outlined"
          name="license"
          onChange={handleChange}
          sx={{mb: 1}}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          name="phone"
          sx={{mb: 1}}
          onChange={handleChange}
        />
        </FormControl>
        <FormControl>
          <InputLabel>Funcionário</InputLabel>
      <Select onChange={handleChange} name="responsable" label="Funcionário">
          {EMPLOYEES.map((person, index) => (
            <MenuItem key={index} value={person}>
              {person}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Adicionar Cliente
        </Button>
    </Stack>
  );
}
