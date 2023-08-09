import { makeRequest } from "./baseRequest";
import { getCompletionApiUrl, getOpenAIApiKey } from "@/utils/env";

export const completionRequest = (prompt) => {
  const url = getCompletionApiUrl();
  const method = "POST";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getOpenAIApiKey()}`,
  };

  const data = {
    model: "text-davinci-003",
    prompt: prompt,
  };

  return makeRequest(url, method, headers, data);
};
