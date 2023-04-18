import {
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { getAll, updateItem } from "../service/api";
import FinalTableCustomer from "./FinalTableCustomer";
import FinalTableService from "./FinalTableService";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../context/Context";

export default function CheckoutTable() {
  const [searchInput, setSearchInput] = useState("");
  const [customer, setCustomer] = useState([]);
  const [autoParts, setAutoParts] = useState([]);

  const navigate = useNavigate();
  const { valueTotal } = useContext(Context);

  const handleSearchLicense = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await getAll("customer10");
      const clientInformations = data.filter(
        (client) => client.license === searchInput
      );
      setCustomer(clientInformations);
      const parts = await getAll("parts10");
      const autoPartsInformations = parts.data.filter(
        (autoParts) => autoParts.license === searchInput
      );
      setAutoParts(autoPartsInformations);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const currentTime = new Date();
    const formattedTime = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
    const payload = {
      ...customer[0],
      outTime: formattedTime,
      _id: undefined,
    };
    await updateItem("customer10", customer[0]._id, payload);
    navigate("/workspace");
  };

  return (
    <Stack p={20}>
      <FormControl onSubmit={handleSearchSubmit}>
        <TextField
          label="Digite a placa do carro"
          variant="outlined"
          value={searchInput}
          onChange={handleSearchLicense}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSearchSubmit}
        >
          Buscar
        </Button>
      </FormControl>
      {customer.length > 0 && autoParts.length > 0 && (
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={16}>
            <Typography variant="h5">Informações do Cliente</Typography>
            <FinalTableCustomer customer={customer} />
          </Grid>
          <Grid item xs={12} md={16}>
            <Typography variant="h5">Informações do serviço</Typography>
            <FinalTableService autoParts={autoParts} />
          </Grid>
          <Typography variant="h5">
            Serviço total:{" "}
            {valueTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Finalizar serviço
          </Button>
        </Grid>
      )}
    </Stack>
  );
}
