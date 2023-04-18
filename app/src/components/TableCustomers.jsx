import { useState, useEffect } from "react";
import { requestCustomers } from "../service/api";
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
      const { data } = await requestCustomers();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ minWidth: 900 }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Placa</StyledTableCell>
            <StyledTableCell align="center">Responsável</StyledTableCell>
            <StyledTableCell align="center">CPF</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <StyledTableRow key={customer.id}>
              <StyledTableCell component="th" scope="row">
                {customer.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {customer.placa}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {customer.responsable}
              </StyledTableCell>
              <StyledTableCell align="center">{customer.cpf}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
