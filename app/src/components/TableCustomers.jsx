import { useState, useEffect } from "react";
import { requestCustomers } from "../service/api";
import { styled } from "@mui/system";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#ECEFF1",
  color: "#000",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#CFD8DC",
  },
});

export default function TableCustomers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const {data} = await requestCustomers();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">CPF</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <StyledTableRow key={customer.id}>
              <StyledTableCell component="th" scope="row">
                {customer.name}
              </StyledTableCell>
              <StyledTableCell align="right">{customer.cpf}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
