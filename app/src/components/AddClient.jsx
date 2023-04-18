import { Box, TextField, Button, Select, MenuItem, FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import { newCustomer } from "../service/api.js";

export default function AddClient() {
  const [clientName, setClientName] = useState("");
  const [CPF, setCPF] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const handleChangeName = ({ target }) => {
    setClientName(target.value);
  };
  const handleChangeCPF = ({ target }) => {
    setCPF(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: clientName,
      CPF,
      responsable: selectedEmployee,
    };
    const crud = await newCustomer('customers1', data)
    console.log(crud)
    setCPF('')
    setClientName('')
    setSelectedEmployee('')
  };

  const handleChangeResponsable = ({ target }) => {
    setSelectedEmployee(target.value);
  };

  useEffect(() => {
    const fetchResponsables = async () => {
      const { data } = await requestEmployees();
      setEmployees(data);
    };
    fetchResponsables();
  }, []);

  return (
    <Box sx={{ minWidth: 900 }}>
      <Box>
        <FormControl>
        <TextField
          label="Nome do Cliente"
          variant="outlined"
          value={clientName}
          onChange={handleChangeName}
        />
        <TextField
          label="CPF"
          variant="outlined"
          value={CPF}
          onChange={handleChangeCPF}
        />
        </FormControl>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Adicionar Cliente
        </Button>
      </Box>
      <Select value={selectedEmployee} onChange={handleChangeResponsable} sx={{ width: "20%" }}>
          {employees.map((person) => (
            <MenuItem key={person.id} value={person.name}>
              {person.name}
            </MenuItem>
          ))}
        </Select>
    </Box>
  );
}
