import { OpenAI } from 'openai'

const openai = new OpenAI(process.env.OPENAI_API_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const prompt = req.body.message
    const gptResponse = await openai.complete({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 60
    })

    res.status(200).json({ message: gptResponse.choices[0].text.trim() })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}