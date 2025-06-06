"use client"

import { useEffect, useRef } from "react"

interface SkillProps {
  name: string
  percentage: number
}

const SkillBar = ({ name, percentage }: SkillProps) => {
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && fillRef.current) {
            fillRef.current.style.width = `${percentage}%`
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

  return (
    <div className="skill">
      <span>{name}</span>
      <div className="skill-bar">
        <div
          ref={fillRef}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          className="fill"
          data-width={`${percentage}%`}
        >
          {percentage}%
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const skills = [
    { name: "Java", percentage: 80 },
    { name: "JavaScript", percentage: 70 },
    { name: "Python", percentage: 80 },
    { name: "HTML & CSS", percentage: 85 },
    { name: "Web Accessibility", percentage: 50 },
    { name: "Analytical Thinking", percentage: 70 },
    { name: "Team Collaboration", percentage: 90 },
    { name: "Attention to Detail", percentage: 80 },
  ]

  return (
    <section role="region" id="skills">
      <h2 style={{ fontSize: "2em", paddingTop: "0.5em" }}>Skills</h2>
      <div className="content">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  )
}
