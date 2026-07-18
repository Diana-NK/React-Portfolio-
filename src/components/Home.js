import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './Tabs';
import Card from './Card';
import deskImage from '../images/developer-workspace.png';
import reactimg from '../images/science.png';
import cimg from '../images/c-.png';
import bootstrapimg from '../images/bootstrap.png';
import figmaimg from '../images/figma.png';
import dotnetimg from '../images/social.png';
import jsimg from '../images/js.png';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiUser } from 'react-icons/fi';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'SQL', Icon: FaDatabase, color: '#00d8fe' },
  { name: 'Bootstrap', image: bootstrapimg },
  { name: 'Figma', image: figmaimg }, { name: 'JavaScript', image: jsimg },
  { name: 'React', image: reactimg }, { name: 'C#', image: cimg },
  { name: '.NET', image: dotnetimg },
];

const Home = () => {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-photo-panel">
          <img src={deskImage} alt="Developer workspace with laptop, desk lamp and notebook" />
          <div className="availability-card">
            <span className="status-dot" />
            <div><strong>Available for opportunities</strong><small>Let's build something amazing</small></div>
            <Link to="/contact" aria-label="Contact me"><FiArrowRight /></Link>
          </div>
          <div className="social-links">
            <a href="https://github.com/Diana-NK" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/diana-kaloyancheva-898832127/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <Link to="/contact" aria-label="Email"><FiMail /></Link>
          </div>
        </div>

        <div className="hero-content">
          <div className="welcome-pill"><span className="waving-hand">👋</span> Welcome to <em>my Portfolio!</em></div>
          <h1>I am <span>FullStack</span> developer</h1>
          <div className="title-rule" />
          <p className="hero-intro">As a person I am positive and career oriented. I am interested in the new technologies and trends in coding. I love changes and trying new and exciting things that help me evolve professionally.</p>

          <div className="skills-strip" id="skills">
            {skills.map(({ name, image, Icon, color }, index) => (
              <React.Fragment key={name}>
                <div className="skill-item">
                  {Icon ? <Icon aria-hidden="true" style={{ color }} /> : <img src={image} alt="" />}
                  <span>{name}</span>
                </div>
                {index < skills.length - 1 && <i />}
              </React.Fragment>
            ))}
          </div>

          <div className="hero-actions">
            <Link className="primary-action" to="/about"><FiUser /> About Me <FiArrowRight /></Link>
          </div>

          <button className="scroll-cue" onClick={scrollToProjects} aria-label="Scroll to projects">
            <span><i /><i /></span><small>Scroll Down</small><b>⌄</b>
          </button>
        </div>
      </section>

      <section id="projects" className="full-screen-section projects-section">
        <div className="container flex-column justify-content-center">
          <h3 className="mt-5 pt-3 mb-3 fs-2 text">Projects</h3>
          <p className="text-center projects-intro">Below are some of the projects I've developed using HTML, CSS, Bootstrap, JavaScript, React, and Tailwind CSS.</p>
        </div>
        <Tabs />
        <div className="container flex-row justify-content-center"><Card /></div>
      </section>
    </main>
  );
};

export default Home;
