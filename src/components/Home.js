import profile from '../images/profile.png';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Tabs from './Tabs';
import Card from './Card';
import ArrowComponent from './ArrowComponent';
import reactimg from '../images/science.png';
import cimg from '../images/c-.png';
import pythonimg from '../images/python.png';
import htmlimg from '../images/html.png';
import cssimg from '../images/css.png';
import bootstrapimg from '../images/bootstrap.png';
import figmaimg from '../images/figma.png';
import dotnetimg from '../images/social.png';
import jsimg from '../images/js.png';

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const imgIcons = {
    html: htmlimg,
    css: cssimg,
    bootstrap: bootstrapimg,
    figma: figmaimg,
    js: jsimg,
    react: reactimg,
    puthon: pythonimg,
    cimg: cimg,
    dotnet: dotnetimg,
  };

  return (
    <div className="container-body">
      <section className="full-screen-section">
        <div className="container d-flex justify-content-center mt-5">
          <div className="m-3" style={{ width: '45%' }}>
            <img
              src={profile}
              alt="Profile"
              className="img-fluid responsive-img rounded-circle shadow"
            />
          </div>
          <div className="mt-5 ms-5">
            <div className="gradient-bg p-3 mb-4 px-5 ps-2 d-inline-flex bg-info bg-opacity-10 border border-2 border-info border-start-0 rounded-end-2 text-light">
              Welcome to my Portfolio!
            </div>
            <h3 className="mt-3 mb-3 fs-2 text">
              I am future
              <span style={{ color: '#00d8fe' }}> FullStack</span> developer
            </h3>
            <p>
              As a person I am positive and career oriented. I am interested in
              the new technologies and trends in coding. I love changes and
              trying new and exciting things that help me evolve professionally.
            </p>
            <p className="mt-3">
              {Object.values(imgIcons).map((icon, index) => (
                <span key={index}>
                  <span style={{ color: '#00d8fe' }}>⋮</span>{' '}
                  <img
                    src={icon}
                    alt={`icon-${index}`}
                    style={{
                      width: '30px',
                      height: '30px',
                      marginRight: '10px',
                      marginTop: '10px',
                    }}
                  />
                </span>
              ))}
              <span style={{ color: '#00d8fe' }}>⋮</span>
            </p>
            <ButtonToolbar>
              <Link to="/about">
                <Button
                  className="mt-2 mb-3 btn_second"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  About Me
                </Button>
              </Link>
            </ButtonToolbar>
          </div>
        </div>
        <button className="scroll-button" onClick={scrollToProjects}>
          <ArrowComponent />
        </button>
      </section>

      <section id="projects" className="full-screen-section">
        <div className="container flex-column justify-content-center">
          <h3 className="mt-5 pt-3 mb-3 fs-2 text">Projects</h3>
          <p className="text-center" style={{ color: '#00d8fe' }}>
            Below are some of the projects I've developed using HTML, CSS,
            Bootstrap, JavaScript, React, and Tailwind CSS. These projects
            showcase my skills in front-end development, responsive design, and
            modern web technologies.
          </p>
        </div>
        <Tabs />
        <div className="container flex-row justify-content-center">
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Home;
