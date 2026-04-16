import axios from "axios";

const API = "http://localhost:8080/api/characters";

export const getCharacters = (sortBy) =>
  axios.get(`${API}?sortBy=${sortBy}`);

export const createCharacter = (data) =>
  axios.post(API, data);

export const updateCharacter = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteCharacter = (id) =>
  axios.delete(`${API}/${id}`);