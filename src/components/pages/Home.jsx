import React from "react";
import { NavLink } from "react-router-dom";
// import profile1 from "../../assets/Home/index"
import profile1 from "../../assets/Home/profile1.jpg";
import tourImg from "../../assets/Projects/tour.png";
import coffeeImg from "../../assets/Projects/coffee.png";
import countryImg from "../../assets/Projects/countrymap.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="home-hero-left">
          <h2 className="home-hero-subtitle">Hello, I am</h2>
          <h1 className="home-hero-title">Imah Wisdom</h1>
          <h3 className="home-hero-role">Frontend Developer</h3>

          <p className="home-hero-desc">
            Crafting digital experiences through clean code and creative 
            problem-solving. I combine technical precision with creative vision 
            to build web applications that not only function flawlessly 
            but inspire and engage users.
          </p>

          <div className="home-hero-buttons">
            <NavLink to="/contact" className="home-btn-primary">Get in Touch</NavLink>
            <NavLink to="/projects" className="home-btn-outline">View My Work</NavLink>
          </div>

          <div className="home-hero-stats">
            <div className="home-stat-box">
              <h2>2+</h2>
              <p>Years Experience</p>
            </div>

            <div className="home-stat-box">
              <h2>10+</h2>
              <p>Projects Completed</p>
            </div>

            <div className="home-stat-box">
              <h2>15+</h2>
              <p>Technologies</p>
            </div>
          </div>
        </div>

        <div className="home-hero-right">
          <div className="home-code-editor">
            <div className="home-code-header">
              <span className="home-dot home-red"></span>
              <span className="home-dot home-yellow"></span>
              <span className="home-dot home-green"></span>
            </div>

            <pre className="home-code-block">
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

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="home-about-preview">
        <div className="home-about-left">
          <h3 className="home-about-subtitle">About Me</h3>
          <h2 className="home-about-title">Who I Am</h2>

          <p className="home-about-text">
            I’m a frontend developer passionate about turning ideas into interactive,
            visually appealing digital experiences.
          </p>

          <p className="home-about-text">
            With a strong foundation in modern web technologies, I constantly explore
            new tools and techniques to deliver quality work that stands out.
          </p>

          <a href="/about" className="home-about-btn">Learn More →</a>
        </div>

        <div className="home-about-right">
          <div className="home-about-image">
            <img src={profile1} alt="profile" />
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="home-featured-projects">
        <h3 className="home-projects-subtitle">Featured Projects</h3>
        <h2 className="home-projects-title">Selected Work</h2>

        <p className="home-projects-text">
          A showcase of some of the projects I’ve built — focusing on clean UI,
          strong functionality, and smooth user experience.
        </p>

        <div className="home-projects-grid">
          {/* Project 1 */}
          <div className="home-project-card">
            <h3 className="home-project-title">Tour Website – Travel Booking UI</h3>
            <img src={tourImg} className="home-project-image" alt="" />
            <p className="home-project-desc">
              A modern travel website with responsive layouts, destination listings,
              and clean UI sections.
            </p>

            <div className="home-project-tags">
              <span>React</span>
              <span>CSS</span>
              <span>Responsive UI</span>
            </div>

            <div className="home-project-buttons">
              <a href="https://tour-site-lj1s.onrender.com" className="home-btn-primary" target="_blank">Live Demo</a>
              <a href="https://github.com/ImahWisdom/Tour" className="home-btn-outline" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="home-project-card">
            <h3 className="home-project-title">Coffee Code – Coffee Shop Website</h3>
            <img src={coffeeImg} className="home-project-image" alt="" />
            <p className="home-project-desc">
              A beautifully designed coffee shop website featuring menu sections and a dark aesthetic.
            </p>

            <div className="home-project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="home-project-buttons">
              <a href="https://coffee-code-nmv0.onrender.com" className="home-btn-primary" target="_blank">Live Demo</a>
              <a href="https://github.com/ImahWisdom/Coffee-code" className="home-btn-outline" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="home-project-card">
            <h3 className="home-project-title">CountryMap – Country Explorer App</h3>
            <img src={countryImg} className="home-project-image" alt="" />
            <p className="home-project-desc">
              Explore countries worldwide with search, region filters, and detailed info pages.
            </p>

            <div className="home-project-tags">
              <span>React</span>
              <span>REST API</span>
              <span>CSS</span>
              <span>Responsive UI</span>
            </div>

            <div className="home-project-buttons">
              <a href="https://countrymap.onrender.com" className="home-btn-primary" target="_blank">Live Demo</a>
              <a href="https://github.com/ImahWisdom/Countrymap" className="home-btn-outline" target="_blank">GitHub</a>
            </div>
          </div>
        </div>

        <div className="home-view-all-container">
          <NavLink to="/projects" className="home-view-all-btn">View All Projects →</NavLink>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="home-cta-section">
        <div className="home-cta-content">
          <h2 className="home-cta-title">Let’s Build Something Great Together</h2>
          <p className="home-cta-text">
            Have an idea or collaboration in mind? Let’s bring it to life.
          </p>

          <div className="home-cta-buttons">
            <NavLink to="/contact" className="home-cta-btn-primary">Get In Touch</NavLink>
            <NavLink to="/projects" className="home-cta-btn-outline">View My Work</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

