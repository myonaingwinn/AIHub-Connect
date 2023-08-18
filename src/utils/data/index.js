export function getRandomPrompts(promptArray) {
  const randomPrompts = [];
  const promptCount = promptArray.length;

  while (randomPrompts.length < 3) {
    const randomIndex = Math.floor(Math.random() * promptCount);
    const randomPrompt = promptArray[randomIndex];

    if (!randomPrompts.includes(randomPrompt)) {
      randomPrompts.push(randomPrompt);
    }
  }

  return randomPrompts;
}

export function getLimitation() {
  return [
    "May occasionally generate incorrect information",
    "May occasionally produce harmful instructions or biased content",
    "Limited knowledge of world and events after 2021",
  ];
}
