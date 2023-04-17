import axios from "axios";

const URL = 'http://localhost:8081'
const api = axios.create({
  baseURL: URL,
});


export const requestCustomers = async () => {
  const response = await api.get('/customers');
  return response;
};