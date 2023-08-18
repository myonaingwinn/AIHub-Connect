import { getRandomPrompts } from ".";

const chatPrompts = [
  "Explain quantum computing in simple terms",
  "Got any creative ideas for a 10 year old's birthday?",
  "How do I make an HTTP request in JavaScript?",
  "Tell me a joke!",
  "Explain the concept of blockchain.",
  "What are your thoughts on artificial intelligence?",
  "Can you help me come up with a catchy slogan for a bakery?",
  "What's the weather like today?",
  "Recommend a good book to read.",
  "How does photosynthesis work?",
  "What are some healthy dinner options?",
  "Give me some tips for improving my programming skills.",
  "Compose a short poem about nature.",
  "What's the capital of France?",
  "Tell me about the history of the Eiffel Tower.",
  "Explain the concept of supply and demand in economics.",
  "Suggest a playlist for a road trip.",
  "What's the best way to learn a new language?",
  "Tell me about the benefits of meditation.",
  "What's your favorite type of music?",
  "Can you recommend a beginner's workout routine?",
  "Explain the theory of relativity in simple terms.",
  "What are some popular tourist attractions in Tokyo?",
  "How does the immune system protect the body?",
  "Suggest some creative writing prompts.",
  "What's the difference between a virus and a bacteria?",
  "Tell me about the life of Leonardo da Vinci.",
  "What are the major steps in the software development life cycle?",
  "Give me tips for taking better photographs.",
  "Explain the concept of climate change and its effects.",
  "What are the key features of the latest smartphones?",
  "Recommend a strategy for effective time management.",
  "Tell me about famous inventions throughout history.",
  "What's the significance of the Pyramids of Giza?",
  "Explain the concept of quantum computing.",
  "Suggest ways to reduce plastic waste.",
  "Tell me about the process of making chocolate.",
  "What's the history behind the Great Wall of China?",
  "Explain the different types of renewable energy sources.",
  "Suggest a recipe for a delicious smoothie.",
  "Tell me about the benefits of regular exercise.",
  "What's the difference between HTML and CSS?",
  "Explain the butterfly effect in chaos theory.",
  "Suggest a destination for a relaxing vacation.",
  "Tell me about the life and achievements of Marie Curie.",
  "What's the role of a web developer?",
  "Explain the concept of natural selection in evolution.",
  "Suggest tips for effective public speaking.",
  "Tell me about the cultural impact of the Beatles.",
  "What's the process of creating a mobile app?",
  "Explain the importance of biodiversity.",
  "Suggest strategies for managing stress.",
  "Tell me about the history of the internet.",
  "What's the role of a database in software development?",
];

const chatCapabilities = [
  "Text Generation: It generates natural-sounding text responses.",
  "Conversational: It engages in conversations and remembers context.",
  "Learning & Explanation: ChatGPT simplifies complex concepts for easier learning and explanations.",
];

export const getChatPrompt = () => {
  return getRandomPrompts(chatPrompts);
};

export const getChatCapabilities = () => {
  return chatCapabilities;
};
