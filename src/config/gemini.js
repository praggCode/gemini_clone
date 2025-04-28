import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDZj8gMtJkjFaL_C1lRNTjPNda3ICbCKVM" });

async function askBot(message) {
  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); // Use 1.5 or whichever version you prefer

  const response = await model.generateContent({
    contents: [
      { role: "user", parts: [{ text: message }] }
    ],
  });

  const text = await response.response.text();
  return text;
}

// Example usage:
askBot("Explain how AI works in a few words")
  .then(console.log)
  .catch(console.error);

export default askBot;
