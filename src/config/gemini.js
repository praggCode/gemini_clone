import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("VITE_GEMINI_API_KEY is not set in .env file");
}

// Log whether we have an API key (but not the actual key)
console.log("API Key is set:", apiKey ? "Yes" : "No");
console.log("API Key length:", apiKey ? apiKey.length : 0);

async function listModels() {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to list models');
    }

    const data = await response.json();
    const modelNames = data.models.map(model => model.name);
    console.log("Available model names:", modelNames);
    return modelNames;
  } catch (error) {
    console.error("Error listing models:", error);
    throw error;
  }
}

async function askBot(message) {
  try {
    // First try with gemini-1.5-pro
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: message }]
          }]
        })
      }
    );

    if (!response.ok) {
      // If gemini-1.5-pro fails, try listing available models
      const modelNames = await listModels();
      console.log("Available model names:", modelNames);
      throw new Error("Failed to generate content. Check console for available models.");
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error.message.includes("API_KEY_INVALID")) {
      return "Error: Invalid API key. Please check your API key configuration.";
    }
    return "Sorry, I encountered an error while processing your request.";
  }
}

export default askBot;
