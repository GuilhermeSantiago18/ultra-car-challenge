import { styled } from "@mui/system";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#C1C1C1",
  color: "#000",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: "#CFD8DC",
});

export default function FinalTableAutoParts({ autoParts }) {
  return (
    <TableContainer component={Paper} sx={{ minWidth: 900 }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">Placa</StyledTableCell>
            <StyledTableCell align="center">Peça</StyledTableCell>
            <StyledTableCell align="center">Quantidade</StyledTableCell>
            <StyledTableCell align="center">Valor Unitário</StyledTableCell>
            <StyledTableCell align="center">Valor Total</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {autoParts.map((part) => (
            <StyledTableRow key={part._id}>
              <StyledTableCell component="th" scope="row" align="center">
                {part.license}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {part.motor}
              </StyledTableCell>
              <StyledTableCell align="center">{part.quantity}</StyledTableCell>
              <StyledTableCell align="center">{part.value}</StyledTableCell>
              <StyledTableCell align="center">{Number(part.value) * Number(part.quantity)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
