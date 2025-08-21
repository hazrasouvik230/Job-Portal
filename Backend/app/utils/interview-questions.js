const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateInterviewQuestions(jobDetails) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Generate 15 best professional interview questions and their answers based on Job title: ${jobDetails.title} and skills: ${jobDetails.requirements}`
    });
    return response.text;
}

module.exports = generateInterviewQuestions;