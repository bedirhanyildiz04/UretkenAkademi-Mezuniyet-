import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBuilding, faNewspaper, faPhone, faCity } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <div className='sticky'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
        <div className="container" id='navcont'>
          <NavLink className="navbar-brand" to="/merambel"><FontAwesomeIcon icon={faHome} /> Meram Belediyesi</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink className="nav-link" to="/"><FontAwesomeIcon icon={faUser} /> Başkan</NavLink>
              <NavLink className="nav-link" to="/about"><FontAwesomeIcon icon={faCity} /> Meram</NavLink>
              <NavLink className="nav-link" to="/kentsel"><FontAwesomeIcon icon={faBuilding} /> Kentsel Dönüşüm</NavLink>
              <NavLink className="nav-link" to="/haberler"><FontAwesomeIcon icon={faNewspaper} /> Haberler</NavLink>
              <NavLink className="nav-link" to="/contact"><FontAwesomeIcon icon={faPhone} /> İletişim</NavLink>
            </ul>
            <div className="d-flex align-items-center">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Arama..." aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Ara</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
