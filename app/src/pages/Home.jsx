import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Box, Typography, FormLabel, Container, FormControl, Stack } from '@mui/material';

function Home() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/workspace')
   
  };

  return (
    <Stack>
      <Box
         sx={{
          minWidth: { xs: 350, md: 350 },
        }}
        component="img"
        src="https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/wp-content/uploads/2019/09/LOGO-TOPO-SITE.png"
      />
      <Box>
      <FormControl onSubmit={handleSubmit} sx={{width: "70%"}}>
        <TextField
          label="Usuário"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Entrar
        </Button>
      </FormControl>
      </Box>
      </Stack>
  );
}

export default Home;
