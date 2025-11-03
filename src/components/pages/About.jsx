import React from "react";
import { FaLightbulb, FaCode, FaUser, FaChartLine } from "react-icons/fa";
import "./About.css";
import img from "../../assets/Home/profile.png";

const values = [
  {
    title: "Innovation First",
    icon: <FaLightbulb className="icon" />,
    description:
      "We prioritize creative solutions and embrace new ideas to solve complex problems."
  },
  {
    title: "Clean Code",
    icon: <FaCode className="icon" />,
    description:
      "Our code is readable, maintainable, and efficient, following best practices."
  },
  {
    title: "User-Centric",
    icon: <FaUser className="icon" />,
    description:
      "We design with empathy, ensuring our products meet the needs of real users."
  },
  {
    title: "Continuous Growth",
    icon: <FaChartLine className="icon" />,
    description:
      "We constantly learn, adapt, and improve to deliver better results over time."
  }
];

const About = () => {
  return (
    <>
      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="about-section">
        <div className="about-left">
          <h3 className="about-subtitle">Get to know</h3>
          <h2 className="about-title">The Developer Behind The Code</h2>

          <p className="about-intro">
            I am Imah Wisdom, a passionate frontend developer focused on creating
            clean, interactive, and visually appealing digital experiences.
          </p>

          <p className="about-desc">
            I transform ideas into responsive and scalable web applications using
            modern technologies and best coding practices.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h2>2+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat">
              <h2>50+</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="stat">
              <h2>15+</h2>
              <p>Technologies</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-image-wrapper">
            <img src={img} alt="Profile" />
          </div>
        </div>
      </section>

      {/* ---------------- STORY SECTION ---------------- */}
      <section className="story-section">
        <div className="story-header">
          <h3 className="story-subtitle">My Journey</h3>
          <h2 className="story-title">The Story Behind the Developer</h2>
          <p className="story-intro">
            A look into how my passion for technology started — and how it shaped
            who I am today as a developer.
          </p>
        </div>

        <div className="story-content">
          <div className="story-box">
            <h3 className="story-heading">Beginning</h3>
            <p className="story-text">
              My journey into tech began in a simple but meaningful way. My older
              sister introduced me to the world of technology, and the moment she
              mentioned it, something clicked.
            </p>
            <p className="story-text">
              I've always been naturally curious — someone who enjoys understanding
              how things work and loves learning something new. So when tech came
              into the picture, it felt like the perfect space for me.
            </p>
            <p className="story-text">
              I pursued my Advanced Diploma in Software Engineering (ADSE) at
              Aptech, and that decision became a major turning point. From writing
              my first lines of code to solving real problems, the experience was
              challenging but exciting. Every step confirmed one thing:
              <strong> tech is where I belong.</strong>
            </p>
          </div>

          <div className="story-box">
            <h3 className="story-heading">Evolution</h3>
            <p className="story-text">
              Today, I’m a Frontend Developer focused on building clean,
              responsive, and interactive digital experiences using modern tools —
              with React at the core of my workflow.
            </p>
            <p className="story-text">
              But this is just the beginning. I’m on the path to becoming a
              Full-Stack Developer by learning Java and strengthening my backend
              engineering skills.
            </p>
            <p className="story-text">
              I’m also expanding into mobile app development with Flutter, because
              I believe a modern developer should be capable of building across
              web and mobile platforms.
            </p>
            <p className="story-text">
              Each day, I continue growing into the developer I envisioned —
              motivated by curiosity, passion, and a commitment to continuous
              improvement.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- VALUES SECTION ---------------- */}
      <section className="ab-section">
        <div className="ab-header">
          <h2>Philosophy & Values</h2>
          <p>Our guiding principles shape the way we build, innovate, and grow.</p>
        </div>

        <div className="cards-container">
          {values.map((item, index) => (
            <div className="card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="ct-section" aria-labelledby="ct-heading">
        <div className="ct-content">
          <h2 id="ct-heading">Ready to Work Together?</h2>
          <p>
            I’m available for projects and collaborations. Download my resume to
            see my experience and skills.
          </p>

          <a
            href="/resume.pdf"
            download="Imah_Wisdom_Resume.pdf"
            className="ct-button"
            aria-label="Download resume PDF"
          >
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default About;

