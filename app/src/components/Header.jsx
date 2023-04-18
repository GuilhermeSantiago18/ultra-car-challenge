import { AppBar, Box, Button, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLogout = () => {
    navigate("/");
  };
  const handleCLickCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Stack>
      <Box
        sx={{
          width: { xs: 200, md: 200 },
        }}
        p={1}
        component="img"
        src="https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/wp-content/uploads/2019/09/LOGO-TOPO-SITE.png"
      />
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          p: 1,
        }}
      >
        {pathname === "/workspace" && (
          <Button
            sx={{ marginRight: 1 }}
            variant="contained"
            onClick={handleCLickCheckout}
          >
            Finalizar Pedido
          </Button>
        )}
        <Button
          variant="contained"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          SAIR
        </Button>
      </Stack>
    </Stack>
  );
}
