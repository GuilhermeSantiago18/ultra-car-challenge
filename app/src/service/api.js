import axios from "axios";


 const ENDPOINT_BASE = `https://crudcrud.com/api/3c7df8467806458990fc90ab57448531/`


export const getAll = async (endpoint) => axios.get(`${ENDPOINT_BASE}${endpoint}`);

export const updateItem = async (endpoint, id, payload) => {
  axios.put(`${ENDPOINT_BASE}${endpoint}/${id}`, payload);
}
export const deleteItem = async (id) => axios.delete(`${ENDPOINT_BASE}/${id}`);

export const insert = async (endpoint, payload) => axios.post(`${ENDPOINT_BASE}${endpoint}`, payload);

export const getItem = async (endpoint, id) => axios.get(`${ENDPOINT_BASE}${endpoint}/${id}`);