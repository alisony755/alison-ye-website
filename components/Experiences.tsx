interface ExperienceProps {
  logo: string
  logoAlt: string
  title: string
  link: string
  role: string
  dates: string
  description: string
}

const ExperienceCard = ({ logo, logoAlt, title, link, role, dates, description }: ExperienceProps) => {
  return (
    <div className="project-card">
      <img src={logo || "/placeholder.svg"} alt={logoAlt} className="project-image" />
      <div className="project-details">
        <h3>
          <a role="link" href={link} target="_blank" rel="noopener noreferrer">
            <strong>{title}</strong>
          </a>
        </h3>
        <h4>
          <strong id="role">{role}</strong>
        </h4>
        <h5 id="dates">{dates}</h5>
        <p id="description">{description}</p>
      </div>
    </div>
  )
}

export default function Experiences() {
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
    },
  ]

  return (
    <section role="region" id="experiences">
      <h2 style={{ fontSize: "2em", paddingTop: "0.5em" }}>Experiences</h2>
      <div
        className="content"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}
      >
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
          />
        ))}
      </div>
    </section>
  )
}
