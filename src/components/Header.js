import { useLocation, useNavigate, Link } from 'react-router-dom';
import logo from '../images/logo-dk-final.png';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollHomeSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <nav className="main-nav" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="Diana Todorova home">
          <img src={logo} alt="DT" />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-content ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            <Link className={location.pathname === '/' ? 'active' : ''} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link className={location.pathname === '/about' ? 'active' : ''} to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <button onClick={() => scrollHomeSection('projects')}>Projects</button>
            <button onClick={() => scrollHomeSection('skills')}>Skills</button>
            <Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>

          <button className="cv-button" type="button" title="Add your CV file to enable this download">
            <FiDownload />
            <span>Download CV</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
