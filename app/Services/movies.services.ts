import axios from "axios";

const API_KEY = "18b5839f44fdd95d1bf003df07fb9e15";
const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const searchMovies = async (query: string) => {
  try {
    const response = await client.get("/search/movie", {
      params: { query },
    });
    console.log(response.data);
    console.log(response.data.results);
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.log("couldn't get the data");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
