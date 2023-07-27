import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        prompt: message,
        max_tokens: 60
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });

      const data = response.data;
      res.status(200).json({ message: data.choices[0].text });
    } catch (error) {
      res.status(500).json({ error: 'Error communicating with OpenAI API' });
    }
  } else {
    res.status(405).json({ error: 'Invalid request method' });
  }
}