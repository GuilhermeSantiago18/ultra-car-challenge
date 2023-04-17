import { useState } from 'react';
import { TextField, Button, Box, Typography, FormLabel } from '@mui/material';

function Home() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <Box justifyContent="space-between">
      <Typography variant="h6">UltraCar System</Typography>
      <FormLabel onSubmit={handleSubmit}>
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
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </FormLabel>
    </Box>
  );
}

export default Home;
