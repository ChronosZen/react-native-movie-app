import axios from "axios";
import { BASE_URL, APP_KEY } from "../config/apiConfig";

const fetchMovies = async () => {
  const type = "popular";
  const options = {
    method: "GET",
    url: `${BASE_URL}/movie/${type}?language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${APP_KEY}`,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default fetchMovies;
