import React from 'react';
import myLogo from '../logo.png';
// REACT FONTAWSEOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img
                    src={myLogo}
                    alt='Grqamol Logo'
                    className='logo'
                />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon
                    icon={faBars}
                    style={{color: '#fff'}}
                />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Մեր մասին</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Առաքելություն</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Հրատարակված գրքեր</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Կոնտակտներ</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar