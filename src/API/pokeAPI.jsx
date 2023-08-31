import { axiosInstance } from "./axios";

export const getPokemonList = (limit) => {
  return axiosInstance.get(`?limit=${limit}`);
};

export const getPokemonByName = (name) => {
  return axiosInstance.get(`${name}`);
};

