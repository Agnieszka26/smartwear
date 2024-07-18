import axios from "axios";
import config from "./config";
const { baseURL } = config();

export const api = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    baseURL,
  });
};

export const apiAuthentication = (token: string) => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `JWT ${token}`,
    },
    baseURL,
  });
};
