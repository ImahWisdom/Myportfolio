import React from "react";
import { useNavigate } from "react-router-dom";
import "./projects.css";

import tourImg from "../../assets/Projects/tour.png";
import countryImg from "../../assets/Projects/countrymap.png";
import intenseImg from "../../assets/Projects/intensegym.png";
import bakerzImg from "../../assets/Projects/Bakezbite.png";
import coffeeImg from "../../assets/Projects/coffee.png";

const projectsData = [
  {
    id: 1,
    title: "Tour Website – Travel Booking UI",
    desc:
      "A modern travel website with responsive layouts, destination listings, and clean UI sections.",
    img: tourImg,
    live: "https://tour-site-lj1s.onrender.com",
    repo: "https://github.com/ImahWisdom/Tour",
    tags: ["React", "CSS", "Responsive UI"],
  },
  {
    id: 2,
    title: "CountryMap – Country Explorer App",
    desc:
      "Explore countries with search, filters, and detailed info pages. Powered by REST Countries API.",
    img: countryImg,
    live: "https://countrymap.onrender.com",
    repo: "https://github.com/ImahWisdom/Countrymap",
    tags: ["React", "REST API", "CSS"],
  },
  {
    id: 3,
    title: "Intense Gym – Fitness Website",
    desc:
      "A fitness website with class listings, trainers, and attractive CTAs to convert visitors into clients.",
    img: intenseImg,
    live: "https://intense-gym.onrender.com",
    repo: "https://github.com/ImahWisdom/Intense-gym",
    tags: ["React", "CSS", "Responsive UI"],
  },
  {
    id: 4,
    title: "Bakerz Bite – Bakery Website",
    desc:
      "A warm, friendly bakery site showcasing products, menus, and online ordering UI details.",
    img: bakerzImg,
    live: "https://bakerz-bite.onrender.com",
    repo: "https://github.com/ImahWisdom/Bakerz-Bite",
    tags: ["HTML", "CSS", "Responsive UI"],
  },
  {
    id: 5,
    title: "Coffee Code – Coffee Shop Website",
    desc:
      "A beautifully designed coffee shop website featuring menu sections and smooth animations.",
    img: coffeeImg,
    live: "https://coffee-code-nmv0.onrender.com",
    repo: "https://github.com/ImahWisdom/Coffee-code",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <main className="proj-page">
      {/* Header Section */}
      <section className="proj-header">
  <div className="proj-container">
    
    {/* Title on SAME LINE */}
    <div className="proj-title-row">
      <h3 className="proj-title-black">Featured</h3>
      <h3 className="proj-title-blue">Projects</h3>
    </div>

    <p className="proj-description">
      A showcase of some of the projects I’ve built — focusing on clean UI,
      strong functionality, and smooth user experience.
    </p>

    <div className="proj-stats">
      <div className="proj-stat-box">
        <div className="proj-stat-number">5+</div>
        <div className="proj-stat-label">Completed Projects</div>
      </div>

      <div className="proj-stat-box">
        <div className="proj-stat-number">15</div>
        <div className="proj-stat-label">Technologies</div>
      </div>

      <div className="proj-stat-box">
        <div className="proj-stat-number">98%</div>
        <div className="proj-stat-label">Client Satisfaction</div>
      </div>

      <div className="proj-stat-box">
        <div className="proj-stat-number">2+</div>
        <div className="proj-stat-label">Years Experience</div>
      </div>
    </div>
  </div>
</section>
      {/* Projects Grid */}
      <section className="proj-grid-section">
        <div className="proj-container">
          <div className="proj-grid">
            {projectsData.map((p) => (
              <article className="proj-card" key={p.id}>
                <div className="proj-image-wrap">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="proj-image"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder.png";
                    }}
                  />
                </div>

                <div className="proj-card-content">
                  <h3 className="proj-card-title">{p.title}</h3>
                  <p className="proj-card-desc">{p.desc}</p>

                  <div className="proj-tags">
                    {p.tags.map((t, i) => (
                      <span key={i} className="proj-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="proj-buttons">
                    <a href={p.live} className="proj-btn-primary" target="_blank">
                      Live Demo
                    </a>

                    <a href={p.repo} className="proj-btn-outline" target="_blank">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="proj-cta">
        <div className="proj-container proj-cta-inner">
          <div className="proj-cta-text">
            <h2>Ready to collaborate?</h2>
            <p>
              Let’s bring your ideas to life with clean, modern, high-performance web
              experiences.
            </p>
          </div>

          <div className="proj-cta-actions">
            <button
              className="proj-btn-white"
              onClick={() => navigate("/contact")}
            >
              Start Project
            </button>

            <a href="/resume.pdf" download="Imah_Wisdom_Resume.pdf" aria-label="Download resume PDF" className="proj-btn-outline-white">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
