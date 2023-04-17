import { useState, useEffect } from "react";
import { requestEmployees } from "../service/api";
import { styled } from "@mui/system";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#C1C1C1",
  color: "#000",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: "#CFD8DC",
});

export default function TableEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const { data } = await requestEmployees();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">CPF</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <StyledTableRow key={employee.id}>
              <StyledTableCell component="th" scope="row">
                {employee.name}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.cpf}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
