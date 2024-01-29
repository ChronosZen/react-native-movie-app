const axios = require("axios");
import { BASE_URL, APP_KEY } from "../config/apiConfig";
const options = {
  method: "GET",
  url: `${BASE_URL}/movie/popular?language=en-US&page=1`,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${APP_KEY}`,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
