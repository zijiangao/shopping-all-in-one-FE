import axios from "axios";

const baseUrl = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 50000, // 5000ms = 5s
  headers: { "X-Custom-Header": "foobar" },
});

const shoppingAllInOneApi = {
  getProduct: (product) => {
    return axiosInstance.get("/products/" + product, {});
  },
};

export default shoppingAllInOneApi;
