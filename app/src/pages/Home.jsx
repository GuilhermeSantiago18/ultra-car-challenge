import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormLabel,
  Container,
  FormControl,
  Stack,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import theme from "../themes/theme";

function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/workspace");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack>
        <Box
          sx={{
            minWidth: { xs: 250, md: 250 },
          }}
          component="img"
          src="https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/wp-content/uploads/2019/09/LOGO-TOPO-SITE.png"
        />
        <Stack p={15}>
          <FormControl onSubmit={handleSubmit} sx={{ width: "100%"}}>
            <TextField
              sx={{mb: 1}}
              label="Usuário"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              label="Senha"
              sx={{mb: 1}}
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormControl>
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Entrar
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default Home;
