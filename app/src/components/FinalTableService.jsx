import { styled } from "@mui/system";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useContext } from "react";
import Context from "../context/Context";

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#C1C1C1",
  color: "#000",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: "#CFD8DC",
});

export default function FinalTableService({ autoParts }) {
   const { setValueTotal } = useContext(Context);

   function calculateTotal(autoParts) {
    let total = 0;
    autoParts.forEach((part) => {
      const quantity = Number(part.quantity) || 0;
      const value = Number(part.value) || 0;
      const service = Number(part.service) || 0;
      total += (quantity * value) + service;
    });
    return total
  }
  const total = calculateTotal(autoParts);
  setValueTotal(total);
  return (
    <TableContainer component={Paper} sx={{ minWidth: 900 }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">Peças trocadas</StyledTableCell>
            <StyledTableCell align="center">Descrição do serviço</StyledTableCell>
            <StyledTableCell align="center">Quantidade</StyledTableCell>
            <StyledTableCell align="center">Valor Unitário por peça</StyledTableCell>
            <StyledTableCell align="center">Valor do serviço</StyledTableCell>
            <StyledTableCell align="center">Valor Total</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {autoParts.map((part) => (
            <StyledTableRow key={part._id}>
              <StyledTableCell component="th" scope="row" align="center">
                {part.motor}
              </StyledTableCell>
              <StyledTableCell align="center">{part.description}</StyledTableCell>
              <StyledTableCell align="center">{part.quantity}</StyledTableCell>
              <StyledTableCell align="center">{part.value}</StyledTableCell>
              <StyledTableCell align="center">{part.service}</StyledTableCell>
              <StyledTableCell align="center">{((Number(part.value) * Number(part.quantity)) || 0) + (Number(part.service) || 0)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
