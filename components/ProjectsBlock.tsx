interface ProjectProps {
  image: string
  imageAlt: string
  title: string
  link: string
  role: string
  dates: string
  description: string
  color: string
}

const ProjectCard = ({ image, imageAlt, title, link, role, dates, description, color }: ProjectProps) => {
  return (
    <div className="project-card" style={{ borderLeftColor: color }}>
      <div className="project-image-container">
        <img src={image || "/placeholder.svg"} alt={imageAlt} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <div className="project-meta">
          <span className="project-role">{role}</span>
          <span className="project-dates">{dates}</span>
        </div>
        <p className="project-description">{description}</p>
      </div>
    </div>
  )
}

export default function ProjectsBlock() {
  const projects = [
    {
      image: "https://i.ibb.co/wNsn96k4/image.png",
      imageAlt: "Graph predicting 2026 Medicaid spending received by top pharmaceutical companies",
      title: "Medicaid Drug Spending Analysis",
      link: "https://github.com/alisony755/ds3000-medicaid-analysis",
      role: "Team Member",
      dates: "January 2025 - April 2025",
      description:
        "An analysis of Medicaid drug spending from 2018 to 2022 using Python. I read in the dataset using the CMS API. In my role, I grouped and filtered the dataset to identify the top 5 pharmaceutical companies by Medicaid spending received in 2022. To forecast future trends, I applied a simple linear regression model to predict Medicaid spending from 2025 to 2026. I visualized these insights using Seaborn, Plotly, and Matplotlib to clearly communicate patterns and projections.",
      color: "#FF6B6B",
    },
    {
      image: "https://i.ibb.co/LQZtV2s/Screenshot-2025-01-13-at-10-08-38-AM.png",
      imageAlt: "FirstByte dashboard screenshot",
      title: "FirstByte Dashboard Design",
      link: "https://www.figma.com/design/IgY6xr3aERfo3l0Kj7k3U2/FirstByte-Workshop-Management?node-id=0-1&p=f&t=MZm8mpnkTnXIkPSU-0",
      role: "Software-Website Team",
      dates: "October 2024 - Present",
      description:
        "A conceptual Figma layout I am designing for FirstByte's collaboration with Camp Harbor View. This dashboard will allow users to register for workshops and access the workshop materials. While the idea is still in development, my design showcases potential features such as user profiles, project dashboards, and interactive elements, designed to create a seamless experience. This mock-up was built with an eye toward user-centered design.",
      color: "#4ECDC4",
    },
    {
      image: "https://i.ibb.co/rmW5HJ2/Screenshot-2025-01-13-at-1-32-33-PM.png",
      imageAlt: "2048 game screenshot",
      title: "Simple 2048 Game",
      link: "https://alisony755.github.io/2048/",
      role: "Independent Project",
      dates: "May 2024",
      description:
        "A recreation of the popular 2048 puzzle game, built using HTML, CSS, and JavaScript. This project demonstrates my front-end development skills, focusing on implementing the core mechanics of tile movement and merging. I used CSS to create smooth animations, enhancing the overall gameplay experience. The game showcases my ability to develop interactive applications with JavaScript, emphasizing clean, intuitive design and engaging user interactions.",
      color: "#45B7D1",
    },
    {
      image: "https://i.ibb.co/0JmSRBy/Screenshot-2025-01-13-at-10-10-51-AM.png",
      imageAlt: "Digital business card screenshot",
      title: "Digital Business Card",
      link: "https://alisonye-card.netlify.app",
      role: "Independent Project",
      dates: "April 2024 - May 2024",
      description:
        "This digital business card is designed to resemble a command line interface, featuring interactive commands that display information about me. Using HTML, CSS, and JavaScript, the card allows users to input commands to learn more about my skills, coding languages, and contact information, offering a creative and engaging way to present my profile.",
      color: "#96CEB4",
    },
  ]

  return (
    <div className="notion-block">
      <div className="block-header">
        <span className="block-icon">🚀</span>
        <h2 className="block-title">Projects</h2>
      </div>
      <div className="block-content">
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              imageAlt={project.imageAlt}
              title={project.title}
              link={project.link}
              role={project.role}
              dates={project.dates}
              description={project.description}
              color={project.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
