import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey:  process.env.GEMINI_API_KEY });

const History = [];

async function chat(userQuery) {

    History.push({
        role: 'user',
        parts: [{ text: userQuery }]
    });

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: History
    });

    History.push({
        role: 'model',
        parts: [{ text: response.text }]
    });

    console.log(response.text);
}

async function main() {
    const userQuery = readlineSync.question("Ask me anything--->")
    await chat(userQuery)
    main()
}

await main();