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
import { request } from "../service/api";

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#C1C1C1",
  color: "#000",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: "#CFD8DC",
});

export default function TableCustomers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data } = await request('customers1');
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ minWidth: 900 }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="center">Placa</StyledTableCell>
            <StyledTableCell align="center">Responsável</StyledTableCell>
            <StyledTableCell align="center">CPF</StyledTableCell>
            <StyledTableCell align="center">Telefone</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <StyledTableRow key={customer._id}>
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
