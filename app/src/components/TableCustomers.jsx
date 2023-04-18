import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { getAll } from "../service/api";

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#45A2D5",
  color: "white",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  color: "white"
});

export default function TableCustomers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data } = await getAll('customer99');
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ minWidth: 900 }}>
      <Table>
        <TableHead>
          <StyledTableRow>
          <StyledTableCell align="center">Data de Entrada</StyledTableCell>
          <StyledTableCell align="center">Data de Saída</StyledTableCell>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Placa</StyledTableCell>
            <StyledTableCell align="center">Responsável</StyledTableCell>
            <StyledTableCell align="center">Telefone</StyledTableCell>
            <StyledTableCell align="center">CPF</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <StyledTableRow key={customer._id}>
              <StyledTableCell component="th" scope="row">
                {customer.entryTime}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {customer.outTime}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {customer.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {customer.license}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {customer.responsable}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {customer.phone}
              </StyledTableCell>
              <StyledTableCell align="center">{customer.cpf}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
