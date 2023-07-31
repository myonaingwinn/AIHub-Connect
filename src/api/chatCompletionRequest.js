import { makeRequest } from "./baseRequest";
import { getChatCompletionApiUrl, getOpenAIApiKey } from "@/utils/env";

export const chatCompletionRequest = async (prompt, messages = null) => {
  const url = getChatCompletionApiUrl();
  const method = "POST";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getOpenAIApiKey()}`,
  };

  const data = {
    model: "gpt-3.5-turbo",
    messages: messages ? messages : [{ role: "user", content: prompt }],
  };

  return makeRequest(url, method, headers, data);
};
