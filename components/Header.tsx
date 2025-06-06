"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const quotes = [
    '"Design is where science and art break even." - Robin Mathew',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer',
    '"The best way to predict the future is to invent it." - Alan Kay',
    '"The computer was born to solve problems that did not exist before." - Bill Gates',
    '"Software is a great combination between artistry and engineering." - Bill Gates',
    '"Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke',
    '"Programming is the art of thinking in a way that computers can understand." - Unknown',
    '"Creativity is intelligence having fun." - Albert Einstein',
    '"Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep." - Scott Adams',
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="notion-header">
      <div className="quote-block">
        <div className="quote-icon">💭</div>
        <p className="quote-text">{quotes[currentQuoteIndex]}</p>
      </div>
    </header>
  )
}
