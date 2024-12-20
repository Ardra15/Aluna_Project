'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Quote, quotes } from '@/components/quote'
import { RefreshCw } from 'lucide-react'

export default function QuoteCard() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0])
  const [isRotating, setIsRotating] = useState(false)

  const generateNewQuote = () => {
    setIsRotating(true)
    const currentIndex = quotes.indexOf(currentQuote)
    const nextIndex = (currentIndex + 1) % quotes.length
    setCurrentQuote(quotes[nextIndex])
    setTimeout(() => setIsRotating(false), 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Quotes of the Day
        </h1>
        
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="absolute top-4 left-4 text-white/20 text-6xl font-serif">"</div>
          <div className="absolute bottom-4 right-4 text-white/20 text-6xl font-serif rotate-180">"</div>
          
          <blockquote className="relative z-10">
            <p className="text-xl md:text-2xl text-white text-center leading-relaxed mb-4">
              {currentQuote.text}
            </p>
            {currentQuote.author && (
              <footer className="text-white/80 text-center mt-4">
                — {currentQuote.author}
              </footer>
            )}
          </blockquote>
        </div>

        <div className="flex justify-center mt-8">
          <Button 
            onClick={generateNewQuote}
            size="lg"
            className="bg-white text-emerald-700 hover:bg-white/90"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isRotating ? 'animate-spin' : ''}`} />
            Generate New Quote
          </Button>
        </div>
      </div>
    </div>
  )
}

