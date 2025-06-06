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
      logo: "https://coe.northeastern.edu/wp-content/uploads/images/logos/firstbyte.png",
      logoAlt: "FirstByte logo",
      title: "FirstByte",
      link: "https://teachfirstbyte.com/",
      role: "Software-Website Team",
      dates: "October 2024 - Present",
      description:
        "I am contributing to the development of a dashboard that facilitates the registration process for and provides easy access to materials for tech workshops. These workshops are part of FirstByte's collaboration with Camp Harbor View and are aimed at local high school students enrolled in the program. My current role involves designing the layout of the platform via Figma with a strong focus on creating an intuitive and user-friendly experience for students in grades 6-8.",
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
