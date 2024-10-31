import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { style, senderName, recipientName, memory } = req.body;

  const stylePrompts = {
    friendly: "warm, casual, and heartfelt tone, like talking to a close friend",
    professional: "polite and formal tone, suitable for business relationships",
    elderly: "respectful and traditional tone, with cultural references",
    romantic: "loving and affectionate tone, suitable for partners or spouses"
  };

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert at writing personalized Diwali greetings that capture the essence of relationships and celebrations.'
        },
        {
          role: 'user',
          content: `Create a Diwali greeting message with these requirements:
          - Write in a ${stylePrompts[style]}
          - It's from ${senderName} to ${recipientName}
          ${memory ? `- Include this special memory or moment: ${memory}` : ''}
          - Keep it 2-3 sentences long
          - Include themes of light, joy, and prosperity
          - Make it personal and meaningful
          - Don't use generic phrases like "on this auspicious occasion"`
        }
      ],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 200,
    });

    res.status(200).json({ message: completion.choices[0]?.message?.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to generate message' });
  }
}