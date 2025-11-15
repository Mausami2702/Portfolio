// src/components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import myImage from '../assets/images/Me1.png';

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
    tagline: 'A fire in the belly to build what moves the ecosystem forward',
    email: 'mausamiparmarcd@gmail.com',
    // phone: '+91 9722674171',
    location: 'Gujarat, IN',
    image: myImage
  };

  // About section
  const about = `“Explore” and “research” are two words that constantly drive me. They push me to discover new ideas, improve existing ones, and bring real innovation into what I create.

I’m passionate about building complex "solutions" that truly help communities—solutions that Challenging processes and are easy for anyone to adopt.

I believe change is the only constant, and adapting to it isn’t always easy. That’s exactly where roles like Product Owner or PMO add value—by making the journey smoother, clearer, and more meaningful for the end user.
`;

  // Experience
  const experience = [
    {
      period: '2024 - Present',
      company: 'US healthcare - Startup',
      role: 'Product Owner',
      description: 'Leading product development initiatives to execution, compliance, project management, and product delivery by driving requirement mapping, sprint planning, feature importance analysis, and leveraging agentic AI capabilities, RAG, and LLM use to enhance processes with defined compliance.'
    },

    {
      period: '2023 - 2024',
      company: 'DLVR only services: Peterborough, Ontario',
      role: 'Project Manager - Business Development',
      description: 'Led product development initiatives and managing stakeholder relationships to increase the business growth'
    },
    {
      period: '2018 - 2023',
      company: 'Softweb Solutions Inc. - An Avnet Company',
      role: 'Project Lead - Iotconnect Ecosystem',
      description: 'Led product roadmap and coordinated with engineering teams to build IOT products marketplace with Smart AI Solutions'
    },
    {
      period: '2016 - 2017',
      company: 'Space O Technologies',
      role: 'Software Quality Analyst',
      description: 'Supported project quality testing and execution for multiple product lines such as ERP, CRM, and EDTech'
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
    items: [
      'Product Strategy',
      'Roadmap Planning',
      'Requirement Mapping',
      'Feature Prioritization',
      'User Stories',
      'Agile/Scrum'
    ]
  },
  {
    category: 'AI & Intelligent Systems',
    items: [
      'Agentic AI Capabilities',
      'LLM Integration',
      'RAG (Retrieval-Augmented Generation)',
      'AI-driven Process Optimization',
      'Prompt Engineering',
      'Automation Workflows',
      'LLM Use with IDE'
    ]
  },
  {
    category: 'Compliance & Governance',
    items: [
      'Process Compliance',
      'Risk Management',
      'Governance Alignment',
      'Regulatory Documentation',
      'Audit Readiness'
    ]
  },
  {
    category: 'PMO & Project Management',
    items: [
      'Project Planning',
      'Sprint Planning',
      'Resource Allocation',
      'Budget Management',
      'Process Improvement'
    ]
  },
  {
    category: 'Tools & Technologies',
    items: [
      'JIRA',
      'Confluence',
      'Figma',
      'Microsoft Project',
      'Tableau',
      'SQL/Python'
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      'Leadership',
      'Communication',
      'Problem Solving',
      'Critical Thinking',
      'Team Collaboration'
    ]
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
