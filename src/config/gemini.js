import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("VITE_GEMINI_API_KEY is not set in .env file");
}

// Log whether we have an API key (but not the actual key)
console.log("API Key is set:", apiKey ? "Yes" : "No");
console.log("API Key length:", apiKey ? apiKey.length : 0);

const ai = new GoogleGenerativeAI({ apiKey });

async function askBot(message) {
  const model = ai.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Detailed error:", {
      message: error.message,
      status: error.status,
      statusText: error.statusText,
      details: error.details
    });
    
    if (error.message.includes("API_KEY_INVALID")) {
      return "Error: Invalid API key. Please check:\n1. You have enabled the Gemini API in Google Cloud Console\n2. Your API key is correct and not expired\n3. You have set up billing for your project\n4. The API key has the necessary permissions";
    }
    return "Sorry, I encountered an error while processing your request.";
  }
}

export default askBot;
