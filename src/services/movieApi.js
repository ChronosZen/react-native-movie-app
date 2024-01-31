import axios from "axios";
import { BASE_URL, APP_KEY } from "../config/apiConfig";

const fetchMovies = async (filterMode, mode, query) => {
  const url = `${BASE_URL}/${mode}/${filterMode}?language=en-US&page=1`;

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
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default fetchMovies;
