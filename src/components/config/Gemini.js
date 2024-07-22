// const apiKey = "AIzaSyC2la0fTs_nIGqVTnxSMC9PlyEyPaHg8CU";

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyC2la0fTs_nIGqVTnxSMC9PlyEyPaHg8CU";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: {
    //   [HarmCategory.HARM_CATEGORY_HARASSMENT]:
    //     HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    //   [HarmCategory.HARM_CATEGORY_HATE_SPEECH]:
    //     HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    // },
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();
}

export default run;
