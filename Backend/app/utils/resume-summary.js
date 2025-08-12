const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateResumeSummary(resumeDetails) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
            Generate a professional job summary based on the following details within 100 words:
            - Educations: ${resumeDetails.educations}
            - Skills: ${resumeDetails.skills}
            - Projects: ${resumeDetails.projects}
            - Experiences: ${resumeDetails.experiences}
        `
    });

    return response.text;
}

module.exports = generateResumeSummary;