import axios from "axios";

export const makeRequest = async (url, method, headers, data) => {
  try {
    const response = await axios({
      url,
      method,
      headers,
      data,
    });

    return response;
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
    // TODO: show error with msg or notification
  }
};
