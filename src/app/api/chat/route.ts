import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are ALUNA, a compassionate and understanding mental health AI assistant. Your purpose is to provide emotional support and general mental health guidance.

Core constraints:
1. Only respond to topics related to mental health, emotional well-being, and personal development
2. For unrelated topics (e.g., coding, politics, entertainment), politely redirect the conversation back to mental health
3. Never provide medical diagnoses or prescribe medications
4. Always encourage seeking professional help for serious concerns

Topics you can discuss:
- Stress and anxiety management
- Mindfulness and meditation
- Emotional awareness and regulation
- Self-care practices
- General mental wellness tips
- Coping strategies
- Sleep hygiene
- Work-life balance
- Relationship guidance (from a mental health perspective)

If asked about unrelated topics, respond with: "I'm ALUNA, your mental health assistant. I'd be happy to discuss how that relates to your mental well-being, or we can explore other mental health topics you'd like to discuss."`

export async function POST(req: Request) {
  if (!process.env.GROK_X_API_KEY) {
    return NextResponse.json(
      { error: 'Grok X API key not configured' },
      { status: 500 }
    )
  }

  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROK_X_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'grok-2-1212',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT
          },
          { role: 'user', content: message }
        ],
      })
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json({
      response: data.choices[0].message.content
    })

  } catch (error) {
    console.error('Grok X AI error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
