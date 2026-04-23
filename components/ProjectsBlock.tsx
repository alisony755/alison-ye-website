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
      image: "https://i.ibb.co/nNt32rm2/image.png",
      imageAlt: "Redesgined DAILP header",
      title: "DAILP Homepage Redesign",
      link: "https://dailp.northeastern.edu/",
      role: "Research Assistant",
      dates: "January 2026 - Present",
      description:
        "I redesigned the DAILP website homepage by iterating on Figma designs and implementing them in code. I developed reusable UI components using React and TypeScript, improving layout structure, maintainability, and user experience. I continuously refined the design through feedback, ensuring alignment between UX decisions and frontend implementation.",
      color: "#45B7D1",
    },
    {
      image: "https://i.ibb.co/7Jn8bHzb/image.png",
      imageAlt: "Metadata editing interface for digital archival documents",
      title: "Metadata Editing and Display",
      link: "https://dailp.northeastern.edu/",
      role: "Software Developer Co-op",
      dates: "July 2025 - December 2025",
      description:
        "I worked as a full-stack developer on the DAILP platform, building and improving features for managing archival metadata across both frontend and backend systems. I implemented backend data models and database queries using SQL and Rust to support structured metadata such as keywords, formats, and other document attributes. On the frontend, I developed interactive interfaces using React and TypeScript for displaying and editing metadata, improving usability for contributors. I collaborated closely with stakeholders and other developers throughout the design process, iterating on UI and workflow decisions in Figma to ensure alignment between user needs and technical implementation.",
      color: "#FF6B6B",
    },
    {
      image: "https://i.ibb.co/yc7gQk1D/image.png",
      imageAlt: "Database schema design for black sea bass analysis",
      title: "Black Sea Bass Range Shift Analysis",
      link: "",
      role: "Team Member",
      dates: "October 2024 - November 2024",
      description:
        "I collaborated with a team of students to analyze ecological changes in black sea bass populations driven by climate-induced range shifts. I helped design and implement a relational MySQL database to structure biological and environmental data, including attributes such as fish length, weight, and geographic catch location. I contributed to defining relationships between entities to enable efficient querying and analysis of population trends. I also applied normalization techniques and integrity constraints to ensure consistency, accuracy, and reliability of the dataset used for ecological analysis. Our work was later used by the Gatins Lab to support ongoing marine biology research.",
      color: "#4ECDC4",
    },
    {
      image: "https://i.ibb.co/wNsn96k4/image.png",
      imageAlt: "Graph predicting 2026 Medicaid spending received by top pharmaceutical companies",
      title: "Medicaid Drug Spending Analysis",
      link: "https://github.com/alisony755/ds3000-medicaid-analysis",
      role: "Team Member",
      dates: "January 2025 - April 2025",
      description:
        "An analysis of Medicaid drug spending from 2018 to 2022 using Python. I read in the dataset using the CMS API. In my role, I grouped and filtered the dataset to identify the top 5 pharmaceutical companies by Medicaid spending received in 2022. To forecast future trends, I applied a simple linear regression model to predict Medicaid spending from 2025 to 2026. I visualized these insights using Seaborn, Plotly, and Matplotlib to clearly communicate patterns and projections.",
      color: "#45B7D1",
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
