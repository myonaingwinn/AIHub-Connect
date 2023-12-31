// Open AI Key
export const getOpenAIApiKey = () => {
  return import.meta.env.VITE_OPENAI_API_KEY;
};

// Chat Completion
export const getChatCompletionApiUrl = () => {
  return import.meta.env.VITE_CHAT_COMPLETION_API_URL;
};

// Chat Completion
export const getCompletionApiUrl = () => {
  return import.meta.env.VITE_COMPLETION_API_URL;
};

// Create Image
export const getCreateImageApiUrl = () => {
  return import.meta.env.VITE_CREATE_IMAGE_API_URL;
};

// Google Client Id
export const getGoogleClientId = () => {
  return import.meta.env.VITE_GOOGLE_CLIENT_ID;
};

// Firebase Config
export const getFirebaseConfig = () => {
  return {
    apiKey: import.meta.env.VITE_FB_API_KEY,
    authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FB_MSG_SENDER_ID,
    appId: import.meta.env.VITE_FB_APP_ID,
  };
};

// Email
export const getContactEmail = () => {
  return import.meta.env.VITE_CONTACT_EMAIL;
};
