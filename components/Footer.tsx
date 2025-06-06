"use client"

import type React from "react"

import { type FormEvent, useState } from "react"

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission functionality
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent! (This is a demo)")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <footer role="contentinfo">
      <section role="form" id="footer-form">
        <h2>Send Me a Message!</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

          <input type="submit" id="submit-form" value="Send" />
        </form>
      </section>

      <div id="icons">
        <a href="mailto:ye.ali@northeastern.edu" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/alisony755" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alison-ye/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <p style={{ textAlign: "center" }}>&copy; 2025 Alison Ye's Personal Website</p>
    </footer>
  )
}
