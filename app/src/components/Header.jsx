import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
      };
  return (
    <div>
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
