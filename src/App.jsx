"use client"

import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Scroll spy for active section
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle("dark-mode")
  }

  const skills = [
    { name: "React", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "JavaScript", level: 90, category: "language" },
    { name: "TypeScript", level: 85, category: "language" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "HTML5", level: 95, category: "frontend" },
    { name: "CSS3", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "database" },
    { name: "Git", level: 85, category: "tools" },
    { name: "UI/UX Design", level: 80, category: "design" },
  ]

  const projects = [
    {
      title: "Scientific Calculator",
      description: "A feature-rich scientific calculator built with React that supports complex mathematical operations.",
      tags: ["React", "JavaScript", "CSS"],
      link: "#",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pokémon Explorer",
      description: "An interactive Pokémon encyclopedia with filtering, pagination, and detailed information pages.",
      tags: ["React", "Firebase", "Material UI"],
      link: "#",
      image: "https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard with analytics, inventory management, and customer management features.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : ""}`}>
      {/* Floating Particles Background */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
            opacity: Math.random() * 0.5 + 0.1,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }} />
        ))}
      </div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <a href="#home" className="logo">
            <span className="logo-text">
              Earl<span className="highlight">Borgonia</span>
            </span>
          </a>

          <div className="nav-right">
            <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              <span className={isMenuOpen ? "open" : ""}></span>
            </button>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${activeSection === section ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="cta-button" onClick={() => setIsMenuOpen(false)}>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-intro">
                <span className="greeting">Hello, I'm</span>
                <h1 className="name">
                  Earl <span className="highlight">Borgonia</span>
                </h1>
                <h2 className="title">Full Stack Developer & UI/UX Designer</h2>
              </div>
              <p className="description">
                I craft exceptional digital experiences with modern technologies, specializing in responsive, 
                user-friendly applications that solve real-world problems.
              </p>
              <div className="cta-buttons">
                <a href="#projects" className="primary-button">
                  View My Work
                </a>
                <a href="#contact" className="secondary-button">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                {["github", "linkedin-in", "twitter", "envelope"].map((icon) => (
                  <a key={icon} href="#" className="social-icon" aria-label={icon}>
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img src="https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/470178759_590342850054198_7499045360279203648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEjfFyVqW8_mKCXGrzSvl7qlBZ24Ug5OQiUFnbhSDk5CFfXJyzynRM9ZvHQASMn4aqsjwP2I4jpWDNi1n7gDjDK&_nc_ohc=Va7p9S2oDo0Q7kNvwGnpDJ4&_nc_oc=AdmXJUrgB5vsFZSXN9mA5Oi2BYYiHr-gv8MBAeoCkasDlQ2ISdS8MtAKwitkkjlDI9o&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=onFmhAC28_UvsEvXpg7YzQ&oh=00_AfH2OxUf56KFGFIQoVO9DNviRzhnb0MrzMmJDPoG8STcpw&oe=681DC4D5" alt="Earl Borgonia" />
                <div className="image-decoration"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Who I Am</span>
            <h2 className="section-title">About Me</h2>
            <div className="title-decoration">
              <span></span>
            </div>
          </div>

          <div className="about-content">
            <div className="about-image">
              <div className="image-frame">
                <img src="https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/470178759_590342850054198_7499045360279203648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEjfFyVqW8_mKCXGrzSvl7qlBZ24Ug5OQiUFnbhSDk5CFfXJyzynRM9ZvHQASMn4aqsjwP2I4jpWDNi1n7gDjDK&_nc_ohc=Va7p9S2oDo0Q7kNvwGnpDJ4&_nc_oc=AdmXJUrgB5vsFZSXN9mA5Oi2BYYiHr-gv8MBAeoCkasDlQ2ISdS8MtAKwitkkjlDI9o&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=onFmhAC28_UvsEvXpg7YzQ&oh=00_AfH2OxUf56KFGFIQoVO9DNviRzhnb0MrzMmJDPoG8STcpw&oe=681DC4D5" alt="Earl Borgonia" />
                <div className="experience-badge">
                  <span className="years">5+</span>
                  <span className="text">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <h3>A passionate developer creating digital experiences</h3>
              <p>
                I'm Earl Borgonia, a full-stack developer with over 5 years of experience building modern web
                applications. I specialize in creating responsive, accessible, and performant digital experiences.
              </p>
              <p>
                My expertise spans the entire development stack, from crafting pixel-perfect UIs to designing robust
                backend systems. I'm proficient in JavaScript/TypeScript, React, Node.js, and various database
                technologies.
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">Earl Borgonia</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">earl@example.com</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">Zamboanga City</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Availability:</span>
                  <span className="detail-value">Open to opportunities</span>
                </div>
              </div>
              <div className="info-cards">
                <div className="info-card">
                  <div className="card-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h4>Education</h4>
                  <p>
                    Bachelor's in Information Technology
                    <br />
                    Western Mindanao State University 
                  </p>
                </div>
                <div className="info-card">
                  <div className="card-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h4>Experience</h4>
                  <p>
                    Senior Full Stack Developer
                    <br />
                    Tech Solutions Inc., 2021-Present
                  </p>
                </div>
              </div>
              <a href="#contact" className="primary-button">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What I Know</span>
            <h2 className="section-title">My Skills</h2>
            <div className="title-decoration">
              <span></span>
            </div>
          </div>

          <div className="skills-content">
            <div className="skills-text">
              <h3>Technical Expertise & Creative Problem Solving</h3>
              <p>
                With a strong foundation in both frontend and backend technologies, I bring a comprehensive approach to
                web development. My skills range from creating intuitive user interfaces to building scalable server
                architectures.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest industry trends and best practices.
                My approach combines technical excellence with user-centered design principles.
              </p>
              <div className="skill-categories">
                <div className="category">
                  <h4>Frontend</h4>
                  <p>React, Next.js, HTML5, CSS3, Tailwind</p>
                </div>
                <div className="category">
                  <h4>Backend</h4>
                  <p>Node.js, Express, REST APIs, GraphQL</p>
                </div>
                <div className="category">
                  <h4>Database</h4>
                  <p>MongoDB, PostgreSQL, Firebase</p>
                </div>
                <div className="category">
                  <h4>Tools</h4>
                  <p>Git, Docker, AWS, Vercel, Figma</p>
                </div>
              </div>
            </div>
            <div className="skills-bars">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">My Recent Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="title-decoration">
              <span></span>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-cta">
            <a href="#" className="secondary-button">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Contact Me</h2>
            <div className="title-decoration">
              <span></span>
            </div>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Talk About Your Project</h3>
              <p>
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'm
                always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="method-details">
                    <h4>Location</h4>
                    <p>Zamboanga City</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-details">
                    <h4>Email</h4>
                    <p>earl@gmail.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="method-details">
                    <h4>Phone</h4>
                    <p>000000000</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                {["github", "linkedin-in", "twitter", "instagram"].map((icon) => (
                  <a key={icon} href="#" className="social-icon" aria-label={icon}>
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-header">
                  <h3>Send Me a Message</h3>
                </div>
                <div className="form-group">
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea id="message" rows={5} placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">
                Earl<span className="highlight">Borgonia</span>
              </span>
              <p>Full Stack Developer & UI/UX Designer</p>
            </div>
            <div className="footer-links">
              <div className="footer-nav">
                <h3>Navigation</h3>
                <ul>
                  {["home", "about", "skills", "projects", "contact",  "blog"].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-contact">
                <h3>Contact</h3>
                <p>Zasmboacnga Citu</p>
                <p>earl@egmail.com</p>
                <p>0000</p>
              </div>
              <div className="footer-social">
                <h3>Social</h3>
                <div className="social-links">
                  {["github", "linkedin-in", "twitter", "instagram"].map((icon) => (
                    <a key={icon} href="#" className="social-icon" aria-label={icon}>
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">© {new Date().getFullYear()} Earl Borgonia. All rights reserved.</div>
            <div className="back-to-top">
              <a href="#home" aria-label="Back to top">
                <i className="fas fa-chevron-up"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App