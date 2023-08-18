import { getRandomPrompts } from ".";

const completionPrompts = [
  "Explain the process of photosynthesis in plants.",
  "Describe the main features and benefits of blockchain technology.",
  "Outline the steps involved in creating a mobile app from scratch.",
  "Provide an in-depth analysis of the impact of climate change on ocean ecosystems.",
  "Discuss the history and significance of the Renaissance period in art and culture.",
  "Explain the differences between classical and operant conditioning in psychology.",
  "Detail the various stages of the software development life cycle.",
  "Describe the key elements of a successful marketing strategy for a new product launch.",
  "Provide an overview of the major theories of evolution in biology.",
  "Explain the concepts of inflation and deflation in economics, including their causes and effects.",
  "Discuss the role of artificial intelligence in modern healthcare and its potential benefits.",
  "Detail the process of DNA replication and its importance in genetic inheritance.",
  "Describe the major architectural styles and characteristics of ancient Egyptian pyramids.",
  "Provide an analysis of the cultural impact and legacy of the Beatles on music and society.",
  "Explain the principles of user experience (UX) design and their relevance in web development.",
  "Discuss the ethical considerations and potential risks associated with genetic engineering.",
  "Detail the components and functions of the human nervous system.",
  "Describe the structure and functions of a typical plant cell in biology.",
  "Explain the concept of supply chain management and its importance in business operations.",
  "Provide a comprehensive overview of the causes, events, and consequences of World War II.",
  "Discuss the role of renewable energy sources in addressing global climate change.",
  "Detail the process of conducting a scientific experiment, including hypothesis formulation and data analysis.",
  "Explain the principles of quantum mechanics and their implications for our understanding of the universe.",
  "Describe the key factors that contribute to effective team collaboration in the workplace.",
  "Discuss the characteristics and classification of different types of galaxies in astronomy.",
  "Detail the steps involved in designing and conducting a social psychology experiment.",
  "Explain the concept of cultural relativism in anthropology and its implications for understanding societies.",
  "Describe the major phases of the cell cycle and the role of mitosis and meiosis in cell division.",
  "Discuss the historical context and significance of the Declaration of Independence in American history.",
  "Detail the process of synaptic transmission in the nervous system and its role in communication between neurons.",
  "Explain the concept of natural selection and its role in the evolution of species.",
  "Describe the principles of object-oriented programming and their application in software development.",
  "Discuss the impact of social media on society, including both positive and negative effects.",
  "Detail the functions of the three branches of government in the United States.",
  "Explain the process of blood clotting and its importance in wound healing.",
  "Describe the structure and function of the respiratory system in humans.",
  "Discuss the causes and consequences of the Industrial Revolution on society and the economy.",
  "Detail the characteristics and properties of different types of chemical bonds.",
  "Explain the concept of cultural appropriation and its implications for respecting diverse cultures.",
  "Describe the role of neurotransmitters in transmitting signals between neurons in the brain.",
  "Discuss the origins and development of the field of psychology as a scientific discipline.",
  "Detail the factors that contribute to climate change and its potential long-term effects.",
  "Explain the principles of the scientific method and how they are applied in research.",
  "Describe the process of cellular respiration and its role in producing energy in cells.",
  "Discuss the key events and consequences of the American Civil War.",
  "Detail the functions of different types of white blood cells in the immune system.",
  "Explain the concept of market segmentation in marketing and its benefits for targeting audiences.",
  "Describe the structure and function of the endocrine system and its role in hormone regulation.",
  "Discuss the major components and functions of a computer's central processing unit (CPU).",
  "Detail the characteristics and properties of different states of matter: solid, liquid, and gas.",
  "Explain the concept of cultural globalization and its impact on cultural diversity.",
  "Describe the process of protein synthesis in cells, including transcription and translation.",
];

const completionCapabilities = [
  'Text Completions: The "Completion" API generates text to continue provided prompts.',
  "Contextual Logic: It maintains context for coherent and relevant responses.",
  "Versatile Use: Useful for creative writing, code generation, and more.",
];

export const getCompletionPrompt = () => {
  return getRandomPrompts(completionPrompts);
};

export const getCompletionCapabilities = () => {
  return completionCapabilities;
};
