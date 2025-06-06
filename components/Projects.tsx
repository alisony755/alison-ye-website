interface ProjectProps {
  image: string
  imageAlt: string
  title: string
  link: string
  role: string
  dates: string
  description: string
}

const ProjectCard = ({ image, imageAlt, title, link, role, dates, description }: ProjectProps) => {
  return (
    <div className="project-card">
      <img className="project-image" src={image || "/placeholder.svg"} alt={imageAlt} />
      <div className="project-details">
        <h3>
          <a role="link" href={link} target="_blank" rel="noopener noreferrer">
            {title}
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

export default function Projects() {
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
    },
  ]

  return (
    <section role="region" id="projects">
      <h2 style={{ fontSize: "2em", paddingTop: "0.5em" }}>Projects</h2>
      <div
        className="content"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}
      >
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
          />
        ))}
      </div>
    </section>
  )
}
