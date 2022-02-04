import axios from "axios";
const key = process.env;

const url = axios.create({
  baseURL: "https://asaas.com/api/v3/",
});

url.interceptors.request.use(function (config) {
  const token =
    "eb90fc896572b0dc3177062751dc1bd1d95a7a5392145a49e76eb99558136c94";
  config.headers.access_token = token;

  return config;
});

export default url;
