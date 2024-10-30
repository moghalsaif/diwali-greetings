import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

const generateMessage = async ({ style, senderName, recipientName, memory }) => {
  const prompt = `Generate a heartfelt Diwali message in ${style} style.
    It should be from ${senderName} to ${recipientName}.
    ${memory ? `Include this special memory: ${memory}` : ''}
    Keep the message warm, festive, and about 2-3 sentences long.
    Include elements about lights, joy, and prosperity where appropriate.`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates personalized Diwali greetings.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 200,
    });

    return completion.choices[0]?.message?.content || 'Failed to generate message';
  } catch (error) {
    console.error('Error generating message:', error);
    return 'Failed to generate message. Please try again.';
  }
};

export { generateMessage };