import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/Home/profile1.jpg";
import tourImg from "../../assets/projects/tour.png";
import coffeeImg from "../../assets/projects/coffee.png";
import countryImg from "../../assets/projects/countrymap.png";
import "./Home.css";

const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-left">
        <h2 className="hero-subtitle">Hello, I am</h2>
        <h1 className="hero-title">Imah Wisdom</h1>
        <h3 className="hero-role">Frontend Developer</h3>

        <p className="hero-desc">
          Crafting digital experiences through clean code and creative 
          problem-solving. I combine technical precision with creative vision 
          to build web applications that not only function flawlessly 
          but inspire and engage users.
        </p>

        <div className="hero-buttons">
          <NavLink to="/contact" className="btn-primary">Get in Touch</NavLink>
          <NavLink to="/projects" className="btn-outline">View My Work</NavLink>
        </div>

        <div className="hero-stats">
          <div className="stat-box">
            <h2>1+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-box">
            <h2>10+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-box">
            <h2>8+</h2>
            <p>Technologies</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="code-editor">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <pre className="code-block">
{`const developer = {
  name: "Imah Wisdom",
  role: "Frontend Developer",
  skills: ["React", "JavaScript", "CSS", "UI"],
  passion: "Building scalable web apps"
};`}
          </pre>
        </div>
      </div>
    </section>
    {/* ===== ABOUT PREVIEW SECTION ===== */}
<section className="about-preview">
  <div className="about-left">
    <h3 className="about-subtitle">About Me</h3>
    <h2 className="about-title">Who I Am</h2>

    <p className="about-text">
      I’m a frontend developer passionate about turning ideas into interactive,
      visually appealing digital experiences. I value clean code, smooth user
      interactions, and building interfaces that feel effortless to use.
    </p>

    <p className="about-text">
      With a strong foundation in modern web technologies, I constantly explore
      new tools and techniques to deliver quality work that stands out.
    </p>

    <a href="/about" className="about-btn">Learn More →</a>
  </div>

  <div className="about-right">
    <div className="about-image">
        <img src={img1} alt="" />
    </div>
  </div>
</section>
    {/* ===============================  
    FEATURED PROJECTS SECTION  
=============================== */}
<section className="featured-projects">

<h3 className="projects-subtitle">Featured Projects</h3>
<h2 className="projects-title">Selected Work</h2>

<p className="projects-text">
  A showcase of some of the projects I’ve built — focusing on clean UI,
  strong functionality, and smooth user experience. Each project reflects
  my growth as a frontend developer.
</p>

<div className="projects-grid">

  {/* ✅ Project 1 — Tour Website */}
  <div className="project-card">
    <div className="project-content">
      <h3 className="project-title">Tour Website – Travel Booking UI</h3>
      <img src={tourImg} alt="Tour Website" className="project-image" />
      <p className="project-desc">
        A modern travel website with responsive layouts, destination listings,
        and clean UI sections. Designed to deliver a smooth user experience
        across all devices.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>CSS</span>
        <span>Responsive UI</span>
      </div>

      <div className="project-buttons">
        <a href="https://tour-site-lj1s.onrender.com" className="btn-primary" target="_blank">
          Live Demo
        </a>
        <a href="https://github.com/ImahWisdom/Tour" className="btn-outline" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  </div>

  {/* ✅ Project 2 — Coffee Code */}
  <div className="project-card">
    <div className="project-content">
      <h3 className="project-title">Coffee Code – Coffee Shop Website</h3>
      <img src={coffeeImg} alt="Coffee Website" className="project-image" />
      <p className="project-desc">
        A beautifully designed coffee shop website featuring menu sections,
        product displays, and a dark aesthetic. Fully responsive with smooth
        layouts across all screens.
      </p>

      <div className="project-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>

      <div className="project-buttons">
        <a href="https://coffee-code-nmv0.onrender.com" className="btn-primary" target="_blank">
          Live Demo
        </a>
        <a href="https://github.com/ImahWisdom/Coffee-code" className="btn-outline" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  </div>

  {/* ✅ Project 3 — CountryMap App */}
  <div className="project-card">
    <div className="project-content">
      <h3 className="project-title">CountryMap – Country Explorer App</h3>
      <img src={countryImg} alt="Countrymap Website" className="project-image" />
      <p className="project-desc">
        Explore countries worldwide with search, region filters, and detailed
        info pages. Powered by REST Countries API and fully responsive.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>REST API</span>
        <span>CSS</span>
        <span>Responsive UI</span>
      </div>

      <div className="project-buttons">
        <a href="https://countrymap.onrender.com" className="btn-primary" target="_blank">
          Live Demo
        </a>
        <a href="https://github.com/ImahWisdom/Countrymap" className="btn-outline" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  </div>

</div>
<div className="view-all-container">
  <NavLink to="/projects" className="view-all-btn">
    View All Projects →
  </NavLink>
</div>
</section>
<section className="cta-section">
  <div className="cta-content">
    <h2 className="cta-title">Let’s Build Something Great Together</h2>
    <p className="cta-text">
      Have an idea, project, or collaboration in mind? I’m always excited to turn concepts 
      into beautiful, functional digital experiences.
    </p>

    <div className="cta-buttons">
      <NavLink to="/contact" className="cta-btn-primary">
        Get In Touch
      </NavLink>

      <NavLink to="/projects" className="cta-btn-outline">
        View My Work
      </NavLink>
    </div>
  </div>
</section>
    </>
  );
};

export default Hero;
