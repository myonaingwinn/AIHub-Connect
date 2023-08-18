import { getRandomPrompts } from ".";

const completionPrompts = [
  "Explain photosynthesis in plants.",
  "Describe blockchain technology features.",
  "Outline creating a mobile app from scratch.",
  "Analyze climate change impact on ocean ecosystems.",
  "Discuss Renaissance's art and culture significance.",
  "Explain classical and operant conditioning.",
  "Detail software development life cycle stages.",
  "Describe key elements of successful marketing.",
  "Overview major theories of evolution in biology.",
  "Explain inflation and deflation in economics.",
  "Discuss AI's role in modern healthcare.",
  "Detail DNA replication importance in inheritance.",
  "Describe ancient Egyptian pyramid styles.",
  "Analyze Beatles' music and societal impact.",
  "Explain UX design principles in web development.",
  "Discuss ethical considerations in genetic engineering.",
  "Detail human nervous system components.",
  "Describe typical plant cell structure.",
  "Explain supply chain management importance.",
  "Overview World War II causes, events, consequences.",
  "Discuss renewable energy's role in climate change.",
  "Detail scientific experiment process.",
  "Explain quantum mechanics principles and implications.",
  "Describe effective team collaboration factors.",
  "Discuss galaxy types in astronomy.",
  "Detail social psychology experiment steps.",
  "Explain cultural relativism in anthropology.",
  "Describe cell cycle phases and mitosis/meiosis roles.",
  "Discuss Declaration of Independence context.",
  "Detail synaptic transmission in the nervous system.",
  "Explain natural selection's role in evolution.",
  "Describe object-oriented programming principles.",
  "Discuss social media's impact on society.",
  "Detail functions of U.S. government branches.",
  "Explain blood clotting's importance in healing.",
  "Describe human respiratory system structure/function.",
  "Discuss Industrial Revolution's causes/consequences.",
  "Detail chemical bond characteristics/properties.",
  "Explain cultural appropriation concept's implications.",
  "Describe neurotransmitters' role in brain signaling.",
  "Discuss psychology's origins and development.",
  "Detail climate change factors and long-term effects.",
  "Explain scientific method principles and application.",
  "Describe cellular respiration's energy production.",
  "Discuss American Civil War key events/consequences.",
  "Detail immune system white blood cell functions.",
  "Explain market segmentation's marketing benefits.",
  "Describe endocrine system structure/function.",
  "Discuss CPU components/functions in computers.",
  "Detail states of matter characteristics: solid, liquid, gas.",
  "Explain cultural globalization and diversity impact.",
  "Describe protein synthesis: transcription, translation.",
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
