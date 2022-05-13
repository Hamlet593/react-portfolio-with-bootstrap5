<<<<<<< HEAD
import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
=======
import React from 'react';
import myLogo from '../logo.png';

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
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
>>>>>>> 749a3be07ae9655364dab20fe1eb700eb2aeb3cf
  )
}

export default Navbar