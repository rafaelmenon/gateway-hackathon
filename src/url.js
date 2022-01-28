import axios from "axios";
const key = process.env;

const url = axios.create({
  baseURL: "https://sandbox.asaas.com/api/v3/",
});

url.interceptors.request.use(function (config) {
  const token = key.API_KEY;
  config.headers.access_token = token;

  return config;
});

export default url;
