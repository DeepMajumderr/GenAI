import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Create a persistent chat instance with memory
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [],
});

async function main() {
  while (true) {
    const userInput = readlineSync.question("Ask me anything ---> ");
    if (userInput.toLowerCase() === "exit") {
      console.log("👋 Goodbye!");
      break;
    }

    const response = await chat.sendMessage({ message: userInput });
    console.log("🤖", response.text);
  }
}

await main();
