import React from "react";

export default function AboutBlock() {
  return (
    <div className="notion-block">
      <div className="block-header">
        <span className="block-icon">👋</span>
        <h2 className="block-title">About Me</h2>
      </div>
      <div className="block-content">
        <div className="text-content">
          <p>
            I am a driven third-year computer science student at Northeastern University, specializing in Artificial Intelligence with a strong interest in full-stack development and user-centered design. I am passionate about building software systems that are both technically robust and accessible, particularly tools that support underrepresented communities and cultural preservation efforts.
          </p>
          <p>
            Through my work with the Digital Archive of Indigenous Language Persistence (DAILP), I have contributed to the development and expansion of a full-stack archival platform used by researchers and partner institutions. I have built features across the stack, including React and TypeScript interfaces for metadata editing, as well as backend data handling and database query optimization for structured archival content. I have also worked on improving usability and accessibility, iterating on interface design in collaboration with developers and stakeholders.
          </p>
          <p>
          Throughout my academic journey, I have developed a strong problem-solving mindset, which I apply to both independent projects and team-based software development. I value building systems that are not only functional, but also intuitive and inclusive, ensuring accessibility for a diverse range of users.
          </p>
          <p>
          In addition to my technical work, I am the Head of Social Media for ACM @ Northeastern, where I manage branding and social media strategy. My experiences across engineering, design, and leadership reflect my goal of building meaningful, user-centered technology with real-world impact.
          </p>
        </div>
      </div>
    </div>
  )
}
