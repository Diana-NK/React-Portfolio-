import React from 'react';
import careerpath from '../images/careerpath.jpeg';
import frontenddeveloper from '../images/frontenddeveloper.png';
import { FiArrowUpRight, FiCode, FiCompass } from 'react-icons/fi';

const About = () => (
  <main className="inner-page about-page">
    <section className="page-heading">
      <span className="eyebrow">A little about me</span>
      <h1>Turning curiosity into <em>digital experiences.</em></h1>
      <p>My journey into development is powered by creativity, continuous learning, and a genuine love for building useful things.</p>
    </section>

    <section className="story-grid">
      <article className="story-card">
        <div className="story-image"><img src={careerpath} alt="A path representing career growth" /><span><FiCompass /></span></div>
        <div className="story-copy">
          <small>01 — My journey</small>
          <h2>Career change</h2>
          <p>I want to change my career path for future growth, new challenges, and—most importantly—my personal interest in technology. My current skills and experience transfer naturally into this new direction.</p>
          <p>Structured learning has given me the knowledge and confidence to pursue opportunities in the IT industry.</p>
        </div>
      </article>

      <article className="story-card story-card-reverse">
        <div className="story-image"><img src={frontenddeveloper} alt="Frontend development workspace" /><span><FiCode /></span></div>
        <div className="story-copy">
          <small>02 — Where I’m going</small>
          <h2>Frontend Developer</h2>
          <p>I am passionate, motivated, and deeply interested in the industry. I bring strong visual instincts, professional graphic skills, and years of content-creation experience to every interface I build.</p>
          <a href="https://github.com/Diana-NK" target="_blank" rel="noreferrer">Explore my work <FiArrowUpRight /></a>
        </div>
      </article>
    </section>
  </main>
);

export default About;
