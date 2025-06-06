"use client"

import { useEffect, useRef } from "react"

interface SkillProps {
  name: string
  percentage: number
  category: string
}

const SkillBar = ({ name, percentage, category }: SkillProps) => {
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && fillRef.current) {
            setTimeout(() => {
              if (fillRef.current) {
                fillRef.current.style.width = `${percentage}%`
              }
            }, 200)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (fillRef.current) {
      observer.observe(fillRef.current)
    }

    return () => {
      if (fillRef.current) {
        observer.unobserve(fillRef.current)
      }
    }
  }, [percentage])

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Programming":
        return "#FF6B6B"
      case "Technical":
        return "#4ECDC4"
      case "Soft Skills":
        return "#45B7D1"
      default:
        return "#96CEB4"
    }
  }

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div
          ref={fillRef}
          className="skill-fill"
          style={{ backgroundColor: getCategoryColor(category) }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}

export default function SkillsBlock() {
  const skills = [
    { name: "Java", percentage: 80, category: "Programming" },
    { name: "JavaScript", percentage: 70, category: "Programming" },
    { name: "Python", percentage: 80, category: "Programming" },
    { name: "SQL", percentage: 60, category: "Programming" },
    { name: "HTML & CSS", percentage: 85, category: "Design" },
    { name: "Web Accessibility", percentage: 50, category: "Design" },
    { name: "Figma", percentage: 40, category: "Design" },
    { name: "React", percentage: 50, category: "Design" },
    { name: "Project Management", percentage: 90, category: "Soft Skills" },
    { name: "Analytical Thinking", percentage: 75, category: "Soft Skills" },
    { name: "Team Collaboration", percentage: 90, category: "Soft Skills" },
    { name: "Attention to Detail", percentage: 80, category: "Soft Skills" },
    { name: "Self Motivation", percentage: 65, category: "Soft Skills" },
  ]

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <div className="notion-block">
      <div className="block-header">
        <span className="block-icon">🚀</span>
        <h2 className="block-title">Skills</h2>
      </div>
      <div className="block-content">
        <div className="skills-container">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {categorySkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} percentage={skill.percentage} category={skill.category} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
