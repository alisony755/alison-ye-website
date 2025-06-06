export default function ContactBlock() {
  const contactItems = [
    {
      icon: "📧",
      title: "Email Me",
      description: "Send me an email",
      link: "mailto:ye.ali@northeastern.edu",
      color: "#FF6B6B",
    },
    {
      icon: "💻",
      title: "My GitHub",
      description: "See my coding projects",
      link: "https://github.com/alisony755",
      color: "#4ECDC4",
    },
    {
      icon: "💼",
      title: "My LinkedIn",
      description: "Connect with me professionally",
      link: "https://www.linkedin.com/in/alison-ye-00b5581b3/",
      color: "#45B7D1",
    },
    {
      icon: "🌐",
      title: "My Website",
      description: "You are here :)",
      link: "https://alisonye.netlify.app/",
      color: "#96CEB4",
    },
  ]

  return (
    <div className="notion-block">
      <div className="block-header">
        <span className="block-icon">📞</span>
        <h2 className="block-title">Contact</h2>
      </div>
      <div className="block-content">
        <div className="contact-grid">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              style={{ borderLeftColor: item.color }}
            >
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-info">
                <h3 className="contact-title">{item.title}</h3>
                <p className="contact-description">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
