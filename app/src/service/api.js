import axios from "axios";

const URL = "http://localhost:8081";
const api = axios.create({
  baseURL: URL,
});

export const requestCustomers = async () => {
  const response = await api.get("/customers");
  return response;
};

export const requestNewCustomer = async (data) => {
  const response = await api.post("/customers", data);
  return response;
};

export const requestEmployees = async () => {
  const response = await api.get("/employees");
  return response;
};
