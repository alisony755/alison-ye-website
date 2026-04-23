interface ExperienceProps {
  logo: string
  logoAlt: string
  title: string
  link: string
  role: string
  dates: string
  description: string
  color: string
}

const ExperienceCard = ({ logo, logoAlt, title, link, role, dates, description, color }: ExperienceProps) => {
  return (
    <div className="experience-card" style={{ borderLeftColor: color }}>
      <div className="experience-header">
        <img src={logo || "/placeholder.svg"} alt={logoAlt} className="experience-logo" />
        <div className="experience-info">
          <h3 className="experience-title">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <p className="experience-role">{role}</p>
          <p className="experience-dates">{dates}</p>
        </div>
      </div>
      <p className="experience-description">{description}</p>
    </div>
  )
}

export default function ExperiencesBlock() {
  const experiences = [
     {
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFiepLgClowqQ/company-logo_200_200/company-logo_200_200/0/1650466196365/dailp_logo?e=1778716800&v=beta&t=ItxhwNxMfcCBaTncBXJXJzDZWevDZCHXs3mxJWTnA3k",
      logoAlt: "DAILP logo",
      title: "Digital Archive of Indigenous Language Persistence (DAILP)",
      link: "https://dailp.northeastern.edu/",
      role: "Research Assistant",
      dates: "January 2026 - Present",
      description:
        "I am contributing to the expansion of the DAILP platform to support external partners, enabling institutions such as Western Carolina University to use the platform’s infrastructure to host and manage their own document collections. I redesigned the website homepage and implemented new UI components using React and TypeScript to improve usability and accessibility. I also my presented system architecture decisions and editing workflows from my metadata display and editing implementation at the CDS Student Showcase.",
     color: "#4ECDC4",
     },
    {
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFiepLgClowqQ/company-logo_200_200/company-logo_200_200/0/1650466196365/dailp_logo?e=1778716800&v=beta&t=ItxhwNxMfcCBaTncBXJXJzDZWevDZCHXs3mxJWTnA3k",
      logoAlt: "DAILP logo",
      title: "Digital Archive of Indigenous Language Persistence (DAILP)",
      link: "https://dailp.northeastern.edu/",
      role: "Software Developer Co-op",
      dates: "July 2025 - December 2025",
      description:
        "During my co-op, I developed full-stack features for managing archival metadata by building and optimizing database queries using Rust and SQL. I implemented archival-standard, interactive user interfaces with React and TypeScript for displaying and editing metadata, improving the usability of document management workflows. I collaborated closely with stakeholders and developers, iterating on product design in Figma to align technical implementation with user and organizational needs.",
      color: "#45B7D1",
    },
    {
      logo: "https://s3.us-east-1.amazonaws.com/files.galaxydigital.com/4548/agency/99769.jpg?20230808202014?area=agency",
      logoeAlt: "RISE Together Logo",
      title: "RISE Together",
      link: "https://www.risetogethermentor.org/",
      role: "Student Mentor",
      dates: "June 2025 - September 2025",
      description:
        "I mentored first-generation students through the college application process by helping them build balanced college lists based on academic goals, financial considerations, and location preferences. I provided detailed feedback on personal statement drafts, focusing on clarity, narrative structure, and effective storytelling. I also supported students in managing application timelines by coordinating early action and scholarship deadlines and helping them stay organized throughout the admissions process.",
      color: "#FF6B6B",
    },
    {
      logo: "https://i.ibb.co/cxJmZ9W/We-Send-3.png",
      logoAlt: "We Send Hope Logo",
      title: "We Send Hope",
      link: "https://wesendhope.wixsite.com/mysite",
      role: "Co-Founder",
      dates: "May 2021 - September 2022",
      description:
        "I co-founded an organization at my high school aimed at supporting individuals experiencing homelessness during the COVID-19 pandemic. I helped organize our fundraiser to raise money so we would assemble and distribute 30+ care packages containing basic toiletries, rain ponchos, compressed towels, and other essentials. I also created the website (via Wix.com) and promotional material for our fundraiser.",
      color: "#4ECDC4",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9jYnGBQI_hXX9Pxc0_QoL9aQnLkHcyXimQ&s",
      logoAlt: "MatchingDonors logo",
      title: "MatchingDonors",
      link: "https://www.matchingdonors.com/life/",
      role: "Graphic Design Intern",
      dates: "December 2020 - April 2021",
      description:
        "I designed and presented gift concepts for donors with MatchingDonors, a non-profit organization dedicated to connecting patients in need of organ transplants with living donors. I also created promotional materials for social media and updated the organization's WordPress website by refreshing content.",
      color: "#45B7D1",
    },
  ]

  return (
    <div className="notion-block">
      <div className="block-header">
        <span className="block-icon">💼</span>
        <h2 className="block-title">Experiences</h2>
      </div>
      <div className="block-content">
        <div className="experiences-container">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              logo={exp.logo}
              logoAlt={exp.logoAlt}
              title={exp.title}
              link={exp.link}
              role={exp.role}
              dates={exp.dates}
              description={exp.description}
              color={exp.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
