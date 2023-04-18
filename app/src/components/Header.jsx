import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
      };
  return (
    <div>
      <Box
          sx={{
            minWidth: { xs: 200, md: 200 },
          }}
          component="img"
          src="https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/wp-content/uploads/2019/09/LOGO-TOPO-SITE.png"
        />
         <Button
          variant="contained"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          SAIR
        </Button>
    </div>
  )
}
