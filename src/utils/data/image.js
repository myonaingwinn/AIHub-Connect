import { getRandomPrompts } from ".";

const imagePrompts = [
  "Generate a serene landscape with a mountain and a calm lake.",
  "Create an abstract art piece with vibrant colors and geometric shapes.",
  "Design a futuristic cityscape with towering skyscrapers and flying vehicles.",
  "Illustrate a cute and playful scene featuring animals in a park.",
  "Generate a fantasy scene with dragons flying over a castle in the clouds.",
  "Create a retro-style poster for a music festival.",
  "Design a spooky haunted house with a full moon in the background.",
  "Generate an underwater scene with colorful coral reefs and exotic fish.",
  "Illustrate a peaceful countryside with a farmhouse and rolling hills.",
  "Create a sci-fi scene on an alien planet with unique flora and fauna.",
  "Generate an intricate mandala pattern with symmetrical designs.",
  "Design a book cover for a mystery novel set in a dark forest.",
  "Illustrate a bustling market scene in a vibrant, exotic location.",
  "Generate a cozy winter cabin with snow-covered trees and a warm fireplace.",
  "Create an otherworldly landscape with floating islands and waterfalls.",
  "Design an advertisement poster for a new fashion collection.",
  "Illustrate a surreal dreamlike scene with flying fish and upside-down houses.",
  "Generate a dynamic action scene featuring superheroes in a city.",
  "Create an art nouveau-inspired illustration with flowing lines and floral motifs.",
  "Design a futuristic spaceship interior with advanced technology.",
  "Illustrate a retro diner scene with jukeboxes and checkerboard floors.",
  "Generate a steampunk city with gears, airships, and mechanical contraptions.",
  "Create a peaceful garden with blooming flowers and a tranquil pond.",
  "Design a poster for an environmental awareness campaign.",
  "Illustrate a scene from a fairy tale with a castle and magical creatures.",
  "Generate a vintage travel poster for a tropical island getaway.",
  "Create a digital portrait of a mysterious character with a mask.",
  "Design an album cover for an electronic music artist.",
  "Illustrate a moment of exploration in outer space with planets and stars.",
  "Generate an energetic street art mural with graffiti and vibrant colors.",
  "Create a whimsical illustration of a talking animal in a whimsical setting.",
  "Design a modern and minimalist logo for a tech startup.",
  "Illustrate a scene from a historical event with accuracy and detail.",
  "Generate an intricate pattern inspired by nature and organic forms.",
  "Create a futuristic vehicle concept with sleek lines and innovative features.",
  "Design an infographic showcasing the benefits of a healthy lifestyle.",
  "Illustrate a scene from a classic literature masterpiece.",
  "Generate a picturesque village nestled among rolling hills.",
  "Create a vintage-style poster for a retro movie night.",
  "Design a tattoo-style illustration inspired by mythology.",
  "Illustrate a scene capturing the magic of a carnival at night.",
  "Generate a high-tech laboratory with advanced scientific equipment.",
  "Create an inspiring motivational poster with a powerful message.",
  "Design an outdoor adventure scene with camping and exploration.",
  "Illustrate a mystical forest with glowing mushrooms and enchanting creatures.",
  "Generate an edgy and futuristic cyberpunk cityscape.",
  "Create an illustration of a character in a fantasy armor set.",
  "Design an innovative and user-friendly mobile app interface.",
  "Illustrate a scene of a historic landmark with intricate architectural details.",
  "Generate a visual representation of a scientific concept or theory.",
  "Create a lively and colorful illustration for a children's book.",
];

const imageCapabilities = [
  "Image Generation: The API creates images from text descriptions.",
  "Text-to-Image: It converts written prompts into visual content.",
  "Versatile Application: Useful for diverse visual content needs.",
];

export const getImagePrompt = () => {
  return getRandomPrompts(imagePrompts);
};

export const getImageCapabilities = () => {
  return imageCapabilities;
};
