import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToProjects = () => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        document
          .getElementById('projects')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document
        .getElementById('projects')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div
        className="container-fluid py-2 px-3 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: '#08002e' }}
      >
        <img src={logo} alt="Logo" height={80} width={100} />

        <button
          style={{ width: '50px', height: '50px' }}
          className="btn btn-light p-2 d-md-none gradient-bg bg-info bg-opacity-10 border border-2 border-info border-start-0 rounded-end text-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNav"
          aria-controls="offcanvasNav"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ background: 'none', fontSize: '30px' }}
          />
        </button>

        <div className="container-list d-none d-md-block">
          <ul className="d-flex gap-4 m-0 p-0" style={{ listStyle: 'none' }}>
            <li>
              <Link className="nav-link text-blue" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link text-blue" to="/about">
                About Me
              </Link>
            </li>
            <li>
              <button
                onClick={goToProjects}
                className="nav-link text-blue bg-transparent border-0 p-0"
                style={{ cursor: 'pointer' }}
              >
                Projects
              </button>
            </li>
            <li>
              <Link className="nav-link text-blue" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNav"
          aria-labelledby="offcanvasNavLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="container-list">
              <ul
                className="d-flex flex-column gap-3 m-0 p-0"
                style={{ listStyle: 'none' }}
              >
                <li>
                  <Link className="nav-link text-blue" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-blue" to="/about">
                    About Me
                  </Link>
                </li>
                <li>
                  <button
                    onClick={goToProjects}
                    className="nav-link text-blue bg-transparent border-0 p-0"
                    style={{ cursor: 'pointer' }}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <Link className="nav-link text-blue" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
