import axios from "axios";

const getCustomers = () => {
  return axios.post("/api/customers/get", { data: 1 });
};

export const http = {
  getCustomers,
};
