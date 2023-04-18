import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  TextField,
  Button,
  Stack
} from "@mui/material";
import { getAll, insert } from "../service/api";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#45A2D5",
  color: "white",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: "#CFD8DC",
});

export default function TableAutoParts() {
  const [parts, setParts] = useState([]);
  const [queryParts, setQueryParts] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchParts = async () => {
      const { data } = await getAll("parts10");
      setParts(data);
    };
    fetchParts();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQueryParts({ ...queryParts, [name]: value });
  };

  const handleClickParts = async (event) => {
    event.preventDefault();
    const parts = {
      motor: queryParts.motor,
      quantity: queryParts.quantity,
      value: queryParts.value,
      license: queryParts.license,
      description: queryParts.description,
      service: queryParts.service,
    };
    await insert("parts10", parts);
    navigate(0)
  };
  return (
    <Container>
      <TableContainer component={Paper} sx={{ minWidth: 900 }}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Placa</StyledTableCell>
              <StyledTableCell align="center">
                Descrição do serviço
              </StyledTableCell>
              <StyledTableCell align="center">Peça a trocar</StyledTableCell>
              <StyledTableCell align="center">Quantidade</StyledTableCell>
              <StyledTableCell align="right">Valor unitário por peça</StyledTableCell>
              <StyledTableCell align="right">Valor do serviço</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {parts.map((employee) => (
              <StyledTableRow key={employee._id}>
                <StyledTableCell component="th" scope="row">
                  {employee.license}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {employee.description}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {employee.motor}
                </StyledTableCell>

                <StyledTableCell component="th" scope="row" align="center">
                  {employee.quantity}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {employee.value}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {employee.service}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack>
      <TextField
        label="Placa"
        variant="outlined"
        name="license"
        sx={{ mb: 1 }}
        onChange={handleChange}
      />
       <TextField
        label="Descrição do serviço"
        variant="outlined"
        name="description"
        sx={{ mb: 1 }}
        onChange={handleChange}
      />
      <TextField
        label="Peça"
        variant="outlined"
        name="motor"
        sx={{ mb: 1 }}
        onChange={handleChange}
      />
      <TextField
        label="Quantidade"
        variant="outlined"
        name="quantity"
        sx={{ mb: 1 }}
        onChange={handleChange}
      />
      <TextField
        label="Valor"
        variant="outlined"
        name="value"
        sx={{ mb: 1 }}
        onChange={handleChange}
      />
       <TextField
        label="Valor do serviço"
        variant="outlined"
        name="service"
        sx={{ mb: 1 }}
        onChange={handleChange}
      />
      
      <Button type="submit" variant="contained" onClick={handleClickParts}>
        Adicionar
      </Button>
      </Stack>
    </Container>
  );
}
