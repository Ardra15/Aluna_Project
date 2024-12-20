'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, AlertTriangle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useAuth } from "@/context/AuthContext"
import ReactMarkdown from 'react-markdown'
import { Alert } from "@/components/ui/alert"

interface Message {
  sender: 'ALUNA' | 'You'
  text: string
  timestamp: Date
}

const MAX_MESSAGES = 10 // Maximum messages per session
const MAX_MESSAGE_LENGTH = 200 // Maximum characters per message

export default function ChatInterface() {
  const { user } = useAuth()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([
    { 
      sender: 'ALUNA', 
      text: 'Hi there! I\'m ALUNA, your mental health AI assistant. How can I help you today? (You have 10 messages per session)',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isLimitReached, setIsLimitReached] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading || isLimitReached) return
    
    // Check message length
    if (inputMessage.length > MAX_MESSAGE_LENGTH) {
      alert(`Please keep your message under ${MAX_MESSAGE_LENGTH} characters`)
      return
    }

    // Check message count
    if (messages.length >= MAX_MESSAGES * 2) { // *2 because each exchange has 2 messages
      setIsLimitReached(true)
      return
    }

    const userMessage = {
      sender: 'You',
      text: inputMessage.trim(),
      timestamp: new Date()
    } as Message

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.text,
          userId: user?.uid
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      const botMessage = {
        sender: 'ALUNA',
        text: data.response,
        timestamp: new Date()
      } as Message

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        sender: 'ALUNA',
        text: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const remainingMessages = Math.floor((MAX_MESSAGES * 2 - messages.length) / 2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-emerald-700 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl flex flex-col h-[600px]">
        <div className="p-4 border-b">
          <h1 className="text-center text-emerald-500 font-medium">ALUNA CHATBOT</h1>
          <div className="text-center text-sm text-gray-500">
            {remainingMessages} messages remaining
          </div>
        </div>

        <div className="overflow-hidden p-4 flex-1 flex flex-col">
          {isLimitReached && (
            <Alert className="mb-4 bg-yellow-50 border-yellow-200">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <span className="text-yellow-800">
                Message limit reached. Please start a new session to continue chatting.
              </span>
            </Alert>
          )}
          
          <ScrollArea className="flex-1 h-[450px]">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-2xl px-6 py-3 max-w-sm ${
                      message.sender === 'You'
                        ? 'bg-[#f47458] text-white'
                        : 'bg-emerald-400 text-white'
                    }`}
                  >
                    <div className="text-sm mb-1">{message.sender}</div>
                    <div className="prose prose-invert">
                      {message.sender === 'ALUNA' ? (
                        <ReactMarkdown>{message.text}</ReactMarkdown>
                      ) : (
                        message.text
                      )}
                    </div>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="relative mt-4">
            <Input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isLimitReached 
                  ? "Message limit reached" 
                  : isLoading 
                    ? "ALUNA is typing..." 
                    : `Type a message (${MAX_MESSAGE_LENGTH - inputMessage.length} characters remaining)`
              }
              disabled={isLoading || isLimitReached}
              maxLength={MAX_MESSAGE_LENGTH}
              className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-200"
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || isLimitReached || !inputMessage.trim()}
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-coral-500 hover:text-coral-600 transition-colors ${
                (isLoading || isLimitReached) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
