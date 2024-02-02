import axios from "axios";
import { BASE_URL, APP_KEY } from "../config/apiConfig";

const fetchMovies = async (filterMode, mode, apiPage) => {
  const url = `${BASE_URL}/${mode}/${filterMode}?language=en-US&page=${apiPage}`;

  const options = {
    method: "GET",
    url: url,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${APP_KEY}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchMovies;
