"use client"

import { useState } from "react"

interface AccessibilityMenuProps {
  increaseFontSize: () => void
  decreaseFontSize: () => void
  toggleDyslexiaFriendlyFont: () => void
  toggleHighContrastMode: () => void
}

export default function AccessibilityMenu({
  increaseFontSize,
  decreaseFontSize,
  toggleDyslexiaFriendlyFont,
  toggleHighContrastMode,
}: AccessibilityMenuProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleAccessibilityMenu = () => {
    setIsMenuVisible((prev) => !prev)
  }

  return (
    <>
      <button className="accessibility-toggle" onClick={toggleAccessibilityMenu} aria-label="Toggle accessibility menu">
        <span className="accessibility-icon">♿</span>
        <span className="accessibility-tooltip">Accessibility Options</span>
      </button>

      {isMenuVisible && (
        <div className="accessibility-menu">
          <h3>Accessibility Options</h3>
          <button onClick={increaseFontSize} className="accessibility-button">
            <span>🔍➕</span>
            Increase Font Size
          </button>
          <button onClick={decreaseFontSize} className="accessibility-button">
            <span>🔍➖</span>
            Decrease Font Size
          </button>
          <button onClick={toggleDyslexiaFriendlyFont} className="accessibility-button">
            <span>👁️</span>
            Dyslexia-Friendly Font
          </button>
          <button onClick={toggleHighContrastMode} className="accessibility-button">
            <span>🌗</span>
            High-Contrast Mode
          </button>
        </div>
      )}
    </>
  )
}
