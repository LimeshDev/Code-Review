import { generateContent } from '../services/ai.service.js'; // ESM import, .js extension zaruri

// Controller function
export async function getReview(req, res) {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).send("Prompt is required");
    }

    // Call AI service
    const response = await generateContent(code);

    res.send({ result: response });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
}
