"use client"

import { useState } from "react"
import Header from "@/components/Header"
import ProfileBlock from "@/components/ProfileBlock"
import AboutBlock from "@/components/AboutBlock"
import ContactBlock from "@/components/ContactBlock"
import SkillsBlock from "@/components/SkillsBlock"
import ExperiencesBlock from "@/components/ExperiencesBlock"
import ProjectsBlock from "@/components/ProjectsBlock"
import MusicBlock from "@/components/MusicBlock"
import AccessibilityMenu from "@/components/AccessibilityMenu"
import Footer from "@/components/Footer"

export default function Home() {
  const [fontSize, setFontSize] = useState(16)
  const [isDyslexiaFont, setIsDyslexiaFont] = useState(false)
  const [isHighContrast, setIsHighContrast] = useState(false)

  const increaseFontSize = () => setFontSize((prev) => prev + 2)
  const decreaseFontSize = () => setFontSize((prev) => Math.max(12, prev - 2))
  const toggleDyslexiaFriendlyFont = () => setIsDyslexiaFont((prev) => !prev)
  const toggleHighContrastMode = () => setIsHighContrast((prev) => !prev)

  return (
    <div
      className={`min-h-screen ${isDyslexiaFont ? "dyslexia-friendly-font" : ""} ${isHighContrast ? "high-contrast-mode" : ""}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <div className="notion-page">
        <Header />
        <div className="notion-content">
          <ProfileBlock />
          <AboutBlock />
          <ContactBlock />
          <SkillsBlock />
          <ExperiencesBlock />
          <ProjectsBlock />
          <MusicBlock />
        </div>
        <AccessibilityMenu
          increaseFontSize={increaseFontSize}
          decreaseFontSize={decreaseFontSize}
          toggleDyslexiaFriendlyFont={toggleDyslexiaFriendlyFont}
          toggleHighContrastMode={toggleHighContrastMode}
        />
      </div>
            <Footer />
    </div>
  )
}
