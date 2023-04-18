import { Button, Typography } from '@mui/material';
import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutTable from '../components/CheckoutTable'
import Context from '../context/Context';


export default function Checkout() {
  const navigate = useNavigate();

  const { valueTotal } = useContext(Context);

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
    navigate('/workspace')
  };

  return (
    <div>
      <CheckoutTable />
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
      </div>
  )
}
