import axios from "axios";

const API_KEY = "xKzh5m4jzyt1dUmxMANZs1Bb8NbyXAZyBtseoEeSTFY";
const URL = "https://api.unsplash.com/search/photos/";

const fetchPfotos = async (query, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(URL, {
      params: {
        client_id: API_KEY,
        query,
        page,
        per_page: perPage,
      },
    });
    const data = response.data.results;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchPfotos;
