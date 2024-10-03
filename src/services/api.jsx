import axios from "axios";

export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1${endpoint}`,
      {
        params: {
          api_key:
            "live_MFcFwVScMhngX6kwH1FMKOjWKGpwQ1oZ7ejVZwU2ixccMi3ORg0WQ2GK8ars1OP0",
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
