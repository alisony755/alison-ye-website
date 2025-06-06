export default function Contact() {
  return (
    <section role="region" id="contact">
      <h2 style={{ fontSize: "2em", paddingTop: "0.5em" }}>Contact</h2>
      <div
        className="content contact-links"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}
      >
        <div className="contact-card">
          <span className="material-symbols-outlined" style={{ paddingTop: "40px" }}>
            send
          </span>
          <h3>
            <a role="link" href="mailto:ye.ali@northeastern.edu">
              Email Me
            </a>
          </h3>
          <p>Send me an email</p>
        </div>
        <div className="contact-card">
          <span className="material-symbols-outlined" style={{ paddingTop: "40px" }}>
            code
          </span>
          <h3>
            <a role="link" href="https://github.com/alisony755">
              My Github
            </a>
          </h3>
          <p>See my coding projects</p>
        </div>
        <div className="contact-card">
          <span className="material-symbols-outlined" style={{ paddingTop: "40px" }}>
            work
          </span>
          <h3>
            <a role="link" href="https://www.linkedin.com/in/alison-ye-00b5581b3/">
              My LinkedIn
            </a>
          </h3>
          <p>Connect with me professionally</p>
        </div>
        <div className="contact-card">
          <span className="material-symbols-outlined" style={{ paddingTop: "20px" }}>
            home
          </span>
          <h3>
            <a role="link" href="https://alisonye.netlify.app/">
              My Website
            </a>
          </h3>
          <p>You are here :)</p>
        </div>
      </div>
    </section>
  )
}
