
import Groq from 'groq-sdk';

const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;

if (!GROQ_API_KEY) {
  console.warn('REACT_APP_GROQ_API_KEY is not set. Groq features will not work.');
}

const client = GROQ_API_KEY ? new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true }) : null;

export async function groqCompletion(input: string) {
  if (!client) {
    return { error: 'Groq API key is not configured. Please set REACT_APP_GROQ_API_KEY environment variable.' };
  }
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: input }
      ],
      max_tokens: 150,
    });
    console.log('GROQ Response:', response);
    return response;
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'message' in error) {
      return { error: (error as { message: string }).message };
    }
    return { error: String(error) };
  }
}