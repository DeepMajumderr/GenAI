import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'

const ai = new GoogleGenAI({ apiKey: "AIzaSyDQB39JriH9p5LEvG6ojrlrAq6wb4Jk7i4" });

const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [],
})



async function main() {
    const userQuery = readlineSync.question("Ask me anything---> ")
    const response = await chat.sendMessage({
        message: userQuery,
    });

    console.log(response.text)
    
    main()
}

await main();