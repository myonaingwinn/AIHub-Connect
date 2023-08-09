import { makeRequest } from "./baseRequest";
import { getCreateImageApiUrl, getOpenAIApiKey } from "@/utils/env";

export const createImageRequest = (prompt) => {
  const url = getCreateImageApiUrl();
  const method = "POST";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getOpenAIApiKey()}`,
  };

  const data = {
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  };

  return makeRequest(url, method, headers, data);
};
