import { generateMessage } from '../../config/groq';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { style, senderName, recipientName, memory } = req.body;
    
    const message = await generateMessage({
      style,
      senderName,
      recipientName,
      memory
    });

    res.status(200).json({ message });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to generate message' });
  }
}