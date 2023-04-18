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

export default function TableAutoParts() {
  const [parts, setParts] = useState([])

  useEffect(() => {
    const fetchParts = async () => {
      const { data } = await request('parts5');
      setParts(data);
    };
    fetchParts();
  }, []);
  return (
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
                {employee.quantidade}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.valor}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
