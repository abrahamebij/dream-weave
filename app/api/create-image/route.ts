"use server"
import { NextResponse } from 'next/server';
import { GoogleGenAI, PersonGeneration } from "@google/genai";
import * as fs from "node:fs";
import { UnsplashSearchResponse } from '@/types/unsplash';

const ai = new GoogleGenAI({});

export async function POST(request: Request) {
  const { prompt: userInput } = await request.json();

  if (!userInput) {
    return NextResponse.json({ error: 'No response body - prompt missing or empty' }, { status: 400 });
  }

  try {
    const promptResponse = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
      You are a dual-mode dream processing assistant with two responsibilities:

      1. **Image Query Generator (Tags)**  
        - Convert the user's dream into a concise Unsplash search query.  
        - Use only concrete, visual elements.  
        - No sentences, no metaphors, no camera terms.  
        - Only keywords separated by commas.  
        - Keep it short but vivid.

      2. **Dream Interpreter (Meaning)**  
        - Provide a brief psychological or symbolic interpretation of the dream.  
        - 2–3 sentences max.  
        - No mystical or supernatural claims.

      Your output must be a JSON object with exactly two fields:
      {
        "tags": "...",
        "interpretation": "..."
      }

      Example:
      Input: "I was flying above a city made of mirrors."
      Output:
      {
        "tags": "mirror city, reflective buildings, surreal skyline, flying perspective",
        "interpretation": "Dreaming of flying over reflective surfaces suggests self-examination and a desire for clarity. The mirrored city may represent feeling surrounded by versions of yourself or expectations placed upon you."
      }

      Now process the user's dream:

      Dream: "${userInput}"
  `,
    });

    if (!promptResponse) {
      return NextResponse.json({ error: 'No response from AI' }, { status: 500 });
    }

    const refinedPrompt: { tags: string, interpretation: string } = parseGeminiJSON(promptResponse.text!)
    console.log('refinedPrompt: ', refinedPrompt);

 

    const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURI(refinedPrompt.tags)}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    )

    const images: UnsplashSearchResponse = await response.json();

    if (!images) {
      return NextResponse.json({ error: 'No image generated' }, { status: 500 });
    }

    return NextResponse.json({ success: true, msg: "Image Generated", data: {tags: refinedPrompt.tags, interpretation: refinedPrompt.interpretation, img: images.results[0].urls.regular, imgColor: images.results[0].color} });



    // return NextResponse.json({ error: 'No image generated' }, { status: 500 });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function parseGeminiJSON(text: string) {
  // strip markdown fences if they exist
  const cleaned = text
    .replace(/```json/i, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}


   // const refinedPrompt = `
    // You are a world-class visual prompt engineer who specialises in turning abstract dreams into vivid, cinematic image prompts.

    // Rewrite the user's dream into a detailed image-generation prompt. 
    // Follow these rules:
    // - Keep it visually rich, imaginative, and coherent.
    // - Preserve the emotional tone of the dream.
    // - Use descriptive language about lighting, atmosphere, textures, colours, and style.
    // - Do NOT include camera jargon (no "35mm", "f/1.8", etc) unless explicitly implied.
    // - Keep the prompt under 160 words and make it simple enough for the image generator
    // - Output ONLY the improved prompt.

    // Dream: "${userInput}"
    // `

    // const response = await ai.models.generateImages({
    //   model: "imagen-4.0-generate-001",
    //   // model: "gemini-2.0-flash-image",
    //   prompt: refinedPrompt || "Generate a random image",
    //   config: { numberOfImages: 1, personGeneration: PersonGeneration.ALLOW_ALL },

    // });
    // console.log('response: ', response);

    // let idx = 1;
    // for (const generatedImage of response.generatedImages!) {
    //   const imgBytes = generatedImage?.image?.imageBytes;
    //   const buffer = Buffer.from(imgBytes!, "base64");
    //   fs.writeFileSync(`imagen-${idx}.png`, buffer);
    //   idx++;
    // }