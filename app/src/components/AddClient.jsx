import { Box, TextField, Button, Select, MenuItem, FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import { newCustomer } from "../service/api.js";


const EMPLOYEES = ['Joao', 'Felipe', 'Maria', 'Sandra'];

export default function AddClient() {
  const [queryData, setQueryData] = useState({});
  const [employees, setEmployees] = useState([]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setQueryData({ ...queryData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: queryData.customerName,
      cpf: queryData.CPF,
      responsable: queryData.responsable,
      license: queryData.license,
      phone: queryData.phone
    };

  
    const crud = await newCustomer('customer1', data);
    console.log(crud)
  };


  useEffect(() => {
    const fetchResponsables = async () => {
      // const { data } = await requestEmployees();
      // setEmployees(data);
    };
    fetchResponsables();
  }, []);

  return (
    <Box sx={{ minWidth: 900 }}>
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
      <Select onChange={handleChange} name="responsable" sx={{ width: "20%" }} label="Funcionário">
          {EMPLOYEES.map((person, index) => (
            <MenuItem key={index} value={person}>
              {person}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Adicionar Cliente
        </Button>
    </Box>
  );
}
