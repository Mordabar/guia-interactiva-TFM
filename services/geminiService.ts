import { GoogleGenAI, Type } from "@google/genai";

// FIX: As per coding guidelines, initialize GoogleGenAI directly with the API key from
// environment variables and assume it's always available. Redundant checks are removed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAITips = async (prompt: string): Promise<string[]> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        tips: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING
                            }
                        }
                    }
                }
            }
        });
        
        const jsonText = response.text.trim();
        const parsed = JSON.parse(jsonText);
        
        if (parsed && Array.isArray(parsed.tips)) {
            return parsed.tips;
        }

        console.error("Unexpected JSON structure from Gemini:", parsed);
        return ["La IA devolvió un formato inesperado."];

    } catch (error) {
        console.error('Error fetching AI tips:', error);
        throw new Error('Failed to generate AI tips.');
    }
};
