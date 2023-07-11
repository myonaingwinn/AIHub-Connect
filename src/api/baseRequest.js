import axios from "axios";

export const makeRequest = async (url, method, headers, data) => {
  const response = await axios({
    url,
    method,
    headers,
    data,
  });

  if (response.status >= 400) {
    throw new Error(`Server Error: ${response.status}`);
  }

  return response;
};
