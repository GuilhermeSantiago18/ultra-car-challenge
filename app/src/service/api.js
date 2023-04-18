import axios from "axios";


 const ENDPOINT_BASE = `https://crudcrud.com/api/3c7df8467806458990fc90ab57448531/`


export const requestCustomers = async () => axios.get(ENDPOINT_BASE);

export const updateItem = async (id, payload) => (
  axios.put(`${ENDPOINT_BASE}/${id}`, payload)
);

export const deleteItem = async (id) => axios.delete(`${ENDPOINT_BASE}/${id}`);

export const newCustomer = async (endpoint, payload) => axios.post(`${ENDPOINT_BASE}${endpoint}`, payload);

export const getItem = async (id) => axios.get(`${ENDPOINT_BASE}/${id}`);