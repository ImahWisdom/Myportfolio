import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import { 
  SiTypescript,
  SiFigma,
  SiMysql,
} from "react-icons/si";

import "./skills.css";

export default function SkillsPage() {
  const navigate = useNavigate();

  return (
    <main className="skills-page">
      {/* =========== HERO SECTION =========== */}
      <section className="skills-hero">
        <div className="skills-container">
          <h2 className="skills-hero-title">
            <span className="skills-hero-normal">Skills &</span>{" "}
            <span className="skills-hero-accent">Technologies</span>
          </h2>

          <p className="skills-hero-text">
            A blend of modern tools, frameworks, and technologies that power my work
            — from UI development to clean, scalable frontend architecture.
          </p>

          <div className="skills-numbers">
            <div className="skills-num-box">
              <h3 className="skills-num-black">15+</h3>
              <p>Technical Skills</p>
            </div>

            <div className="skills-num-box">
              <h3 className="skills-num-blue">2+</h3>
              <p>Years Experience</p>
            </div>

            <div className="skills-num-box">
              <h3 className="skills-num-orange">5+</h3>
              <p>Projects Built</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== TECHNICAL PROFICIENCY =========== */}
      <section className="skills-tech">
        <div className="skills-container">
          <h3 className="skills-section-title">Technical Proficiency</h3>

          <div className="skills-grid">
            <div className="skills-grid-item">
              <FaHtml5 /> <p>HTML</p>
            </div>

            <div className="skills-grid-item">
              <FaCss3Alt /> <p>CSS</p>
            </div>

            <div className="skills-grid-item">
              <FaJs /> <p>JavaScript</p>
            </div>

            <div className="skills-grid-item">
              <FaReact /> <p>React</p>
            </div>

            <div className="skills-grid-item">
              <SiTypescript /> <p>TypeScript</p>
            </div>

            <div className="skills-grid-item">
              <FaGitAlt /> <p>Git</p>
            </div>

            <div className="skills-grid-item">
              <FaGithub /> <p>GitHub</p>
            </div>

            <div className="skills-grid-item">
              <SiFigma /> <p>UI/UX</p>
            </div>

            <div className="skills-grid-item">
              <SiMysql /> <p>Database</p>
            </div>

            <div className="skills-grid-item">
              <FaCode /> <p>C#</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== CTA SECTION =========== */}
      <section className="skills-cta">
        <div className="skills-container skills-cta-inner">
          <div className="skills-cta-text">
            <h2>Ready to collaborate?</h2>
            <p>
              Let’s bring your ideas to life with clean, modern and powerful digital
              experiences.
            </p>
          </div>

          <div className="skills-cta-actions">
            <button
              className="skills-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </button>

            <button
              className="skills-btn-outline"
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

