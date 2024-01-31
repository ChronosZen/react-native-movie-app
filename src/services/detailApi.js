import axios from "axios";
import { BASE_URL, API_KEY } from "../config/apiConfig";

const fetchSingle = async (id, mode) => {
  const url = `${BASE_URL}/${mode}/${id}?api_key=${API_KEY}`;
  const options = {
    method: "GET",
    url: url,
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchSingle;
