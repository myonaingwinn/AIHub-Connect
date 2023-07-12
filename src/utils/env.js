// Open AI Key
export const getOpenAIApiKey = () => {
  return import.meta.env.VITE_OPENAI_API_KEY;
};

// Chat Completion
export const getChatCompletionApiUrl = () => {
  return import.meta.env.VITE_CHAT_COMPLETION_API_URL;
};
