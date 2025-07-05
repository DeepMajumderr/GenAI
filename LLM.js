import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'

const ai = new GoogleGenAI({ apiKey: "AIzaSyDQB39JriH9p5LEvG6ojrlrAq6wb4Jk7i4" });

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