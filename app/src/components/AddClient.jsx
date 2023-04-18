import { Box, TextField, Button, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { requestEmployees, requestNewCustomer } from "../service/api";

export default function AddClient() {
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };
  const handleChangeCPF = ({ target }) => {
    setCPF(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      CPF,
      responsable: selectedEmployee,
    };
    await requestNewCustomer(data);
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
        <TextField
          label="Nome do Cliente"
          variant="outlined"
          value={name}
          onChange={handleChangeName}
        />
        <TextField
          label="CPF"
          variant="outlined"
          value={CPF}
          onChange={handleChangeCPF}
        />
        <Select value={selectedEmployee} onChange={handleChangeResponsable} sx={{ width: "20%" }}>
          {employees.map((person) => (
            <MenuItem key={person.id} value={person.name}>
              {person.name}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Adicionar Cliente
        </Button>
      </Box>
    </Box>
  );
}
