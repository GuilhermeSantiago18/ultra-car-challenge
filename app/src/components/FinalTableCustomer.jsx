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

export default function FinalTableCustomer({ customer }) {
  return (
    <TableContainer component={Paper} sx={{ minWidth: 900 }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">Data de entrada</StyledTableCell>
            <StyledTableCell align="center">Data de saída</StyledTableCell>
            <StyledTableCell align="center">Placa</StyledTableCell>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Responsável</StyledTableCell>
            <StyledTableCell align="center">Telefone</StyledTableCell>
            <StyledTableCell align="center">CPF</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {customer.map((client) => (
            <StyledTableRow key={client._id}>
              <StyledTableCell component="th" scope="row" align="center">
                {client.entryTime}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {client.outTime}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {client.license}
              </StyledTableCell>
              <StyledTableCell align="center">{client.name}</StyledTableCell>
              <StyledTableCell align="center">{client.responsable}</StyledTableCell>
              <StyledTableCell align="center">{client.phone}</StyledTableCell>
              <StyledTableCell align="center">{client.cpf}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
