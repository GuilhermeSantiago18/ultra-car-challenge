import { Box, Stack } from "@mui/system";
import React from "react";
import CheckoutTable from "../components/CheckoutTable";
import Header from "../components/Header";

export default function Checkout() {
  return (
    <Stack
      width="100%"
      display="flex"
      flexDirection="center"
      alignItems="center"
    >
      <Header />
      <CheckoutTable />
    </Stack>
  );
}
