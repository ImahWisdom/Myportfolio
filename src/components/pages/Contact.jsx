import React from "react";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css"

const ContactPage = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
      setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        {
          question: "Are you available for freelance or contract projects?",
          answer:
            "Yes, I’m open to freelance and contract opportunities. If you have a project in mind, I’d love to collaborate.",
        },
        {
          question: "What technologies do you specialize in?",
          answer:
            "I focus on modern frontend development including React, JavaScript, responsive UI and performance optimization.",
        },
        {
          question: "How soon do you respond to messages?",
          answer: "I typically reply within 24 hours, sometimes within minutes.",
        },
        {
          question: "Do you work with backend or full-stack projects?",
          answer:
            "I specialize in frontend but I integrate APIs and collaborate with backend developers.",
        },
        {
          question: "Can you redesign or improve an existing website?",
          answer:
            "Absolutely. I can rebuild or upgrade your UI, fix responsiveness, and improve user experience.",
        },
      ];
    
  return (
    <div className="contact-container">

      {/* HEADER */}
      <div className="contact-hero">
        <h1>
          <span className="black-text">Get in </span>
          <span className="blue-text">Touch</span>
        </h1>
        <p className="contact-subtext">
          Have a project in mind or want to collaborate? Reach out anytime.
        </p>
      </div>

      {/* CONTACT FORM */}
      <form
        className="contact-form"
        action="https://formspree.io/f/mvgpyoqw"
        method="POST"
      >
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name="name" required placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input type="email" name="email" required placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Write your message..."
          />
        </div>

        <button type="submit" className="contact-submit">
          Send Message
        </button>
      </form>

      {/* SOCIAL LINKS */}
      <div className="social-section">
        <h2>Connect with me</h2>

        <div className="social-icons">
          <a
            href="https://github.com/ImahWisdom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/imah-wisdom-869349330"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/wizzy0115?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          <a
            href="https://wa.me/2348183547260"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="contact-container">

{/* KEEP YOUR HEADER, FORM AND SOCIALS — unchanged */}

{/* ✅ FAQ DROPDOWN SECTION */}
<div className="faq-section">
  <h2 className="faq-header">Frequently Asked Questions</h2>

  {faqData.map((item, index) => (
    <div
      key={index}
      className={`faq-item ${openFAQ === index ? "open" : ""}`}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        <h3>{item.question}</h3>
        <span className="faq-icon">{openFAQ === index ? "-" : "+"}</span>
      </div>

      <div
        className="faq-answer"
        style={{
          maxHeight: openFAQ === index ? "200px" : "0px",
        }}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  ))}
</div>
</div>

    </div>
  );
};

export default ContactPage;
