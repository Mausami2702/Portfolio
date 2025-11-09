// src/components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import myImage from '../assets/images/1718219627693.jpg';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // User information
  const personalInfo = {
    name: 'Mausami Parmar',
    title: 'Product Owner | Project Lead',
    tagline: 'Similarity is complicated then it seems',
    email: 'mausamiparmarcd@gmail.com',
    // phone: '+91 9722674171',
    location: 'Gujarat, IN',
    image: myImage
  };

  // About section
  const about = `I love to design solutions that help the community by creating an environment which reduces the complexity of flows and is easy to adapt. 
  "Explore" and "research" are my favorite words, as they help me develop new solutions and
  improvise existing ones with absolute innovation. Change is constant, and that is the only thing that is difficult in this world. 
  Facing it practically is tough, and that's where Product Owner or PMO roles come into the picture to make the journey smoother for the end user.`;

  // Experience
  const experience = [
    {
      period: '2022 - Present',
      company: 'Tech Solutions Inc',
      role: 'Senior Product Owner',
      description: 'Leading product development initiatives and managing stakeholder relationships'
    },
    {
      period: '2020 - 2022',
      company: 'Digital Innovations Co',
      role: 'Product Owner',
      description: 'Managed product roadmap and coordinated with engineering teams'
    },
    {
      period: '2018 - 2020',
      company: 'StartUp Ventures',
      role: 'PMO Analyst',
      description: 'Supported project planning and execution for multiple product lines'
    }
  ];

  // Education
  const education = [
    {
      period: '2023 - 2024',
      institution: 'Sir Stanford Fleming College - Canada',
      degree: 'Post Graduate Diploma in Project Management',
      details: 'Major in Business Administration'
    },
    {
      period: '2011 - 2015',
      institution: 'DDIT - Gujarat',
      degree: 'Bachelor of Technology in Information Technology',
      // details: 'Minor in Business Administration'
    }
  ];

  // Skills
  const skills = [
    {
      category: 'Product Management',
      items: ['Product Strategy', 'Roadmap Planning', 'Stakeholder Management', 'User Stories', 'Agile/Scrum']
    },
    {
      category: 'PMO & Project Management',
      items: ['Project Planning', 'Risk Management', 'Resource Allocation', 'Budget Management', 'Process Improvement']
    },
    {
      category: 'Tools & Technologies',
      items: ['JIRA', 'Confluence', 'Figma', 'Microsoft Project', 'Tableau', 'SQL']
    },
    {
      category: 'Soft Skills',
      items: ['Leadership', 'Communication', 'Problem Solving', 'Critical Thinking', 'Team Collaboration']
    }
  ];

  // Social links
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/mausami-parmar', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/mausami-parmar', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/mausami_parmar', label: 'Twitter' }
  ];

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className={`portfolio-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="header-brand">
            <div className="brand-dot"></div>
            <span className="brand-name">{personalInfo.name}</span>
          </div>
          <nav className="header-nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#skills" className="nav-link">Skills</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img
              src={personalInfo.image}
              alt={`Professional photo of ${personalInfo.name}`}
              className="hero-image"
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">{personalInfo.name}</h1>
            <p className="hero-subtitle">{personalInfo.title}</p>
            <p className="hero-tagline">{personalInfo.tagline}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section">
        <div className="section-container">
          <h2 className="section-title">About</h2>
          <p className="section-text">{about}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="content-section">
        <div className="section-container-wide">
          <h2 className="section-title">Experience</h2>
          <div className="timeline-container">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <span className="timeline-period">{exp.period}</span>
                <span className="timeline-company">{exp.company}</span>
                <span className="timeline-role">{exp.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="content-section">
        <div className="section-container-wide">
          <h2 className="section-title">Education</h2>
          <div className="timeline-container">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <span className="timeline-period">{edu.period}</span>
                <span className="timeline-education">{edu.institution}</span>
                <div className="timeline-details">
                  <span className="timeline-degree">{edu.degree}</span>
                  {edu.details && <span className="timeline-minor">{edu.details}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section skills-section">
        <div className="section-container-wide">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <div className="footer-contact">
            <div className="brand-dot"></div>
            <a href={`mailto:${personalInfo.email}`} className="footer-email">
              {personalInfo.email}
            </a>
          </div>
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
