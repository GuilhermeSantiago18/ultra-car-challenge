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
} from "@mui/material";
import { getAll, insert } from "../service/api";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#C1C1C1",
  color: "#000",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: "#CFD8DC",
});

export default function TableAutoParts() {
  const [parts, setParts] = useState([])
  const [queryParts, setQueryParts] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const fetchParts = async () => {
      const { data } = await getAll('parts5');
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
        value: queryParts.value
      }
      await insert('parts5', parts)
  }
  return (
    <Container>
    <TableContainer component={Paper} sx={{ minWidth: 900 }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Peça</StyledTableCell>
            <StyledTableCell align="center">Quantidade</StyledTableCell>
            <StyledTableCell align="right">Valor</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {parts.map((employee) => (
            <StyledTableRow key={employee._id}>
              <StyledTableCell component="th" scope="row">
                {employee.motor}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {employee.quantity}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TextField
          label="Peça"
          variant="outlined"
          name="motor"
          sx={{mb: 1}}
          onChange={handleChange}
        />
        <TextField
          label="Quantidade"
          variant="outlined"
          name="quantity"
          sx={{mb: 1}}
          onChange={handleChange}
        />
        <TextField
          label="Valor"
          variant="outlined"
          name="value"
          sx={{mb: 1}}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" onClick={handleClickParts}>Adicionar</Button>
    </Container>
  );
}