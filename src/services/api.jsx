import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "https://api.thecatapi.com/v1";


const api_key = process.env.API_KEY || "live_MFcFwVScMhngX6kwH1FMKOjWKGpwQ1oZ7ejVZwU2ixccMi3ORg0WQ2GK8ars1OP0"


export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await axios.get(
      `${URL}${endpoint}`,
      {
        params: {
          api_key:
            api_key,
          ...options,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
