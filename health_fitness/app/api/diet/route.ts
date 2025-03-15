import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST (req: NextRequest, res: NextResponse) {
  
  try {

    const body = await req.json();
    if (!body.weight || !body.height || !body.age) {
      return Response.json({
        error: "Missing required fields" 
      })
      
    }

    // Calculate BMI
    const bmi = body.weight / (body.height * body.height);
    const bmiCategory = getBMICategory(bmi);

    // Generate a prompt for OpenAI
    const prompt = `
      I am ${body.age} years old with a BMI of ${bmi.toFixed(2)} (${bmiCategory}). 
      Suggest a detailed diet plan for me including:
      - Breakfast
      - Lunch
      - Dinner
      - Snacks
      - Hydration tips
      - Supplements (if necessary)
    `;

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });

    Response.json({
      bmi: bmi.toFixed(2), dietPlan: response.choices[0].message.content 
    })
  } catch (error) {
    console.error("Error generating diet plan:", error);
    return Response.json({
      error: "Internal Server Error"
    })
  }
}

// Helper function to categorize BMI
function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Normal weight";
  if (bmi < 29.9) return "Overweight";
  return "Obese";
}
