import React from 'react';
import Button from '../elements/Button';

const Navbar = () => (
  <nav className="Navbar">
    <img src="/assets/logo.svg" alt="Shortly" className="Navbar__logo" />
    <div className="Navbar__links">
      <div className="Navbar__navigation">
        <div className="Navbar__navigationItem">Features</div>
        <div className="Navbar__navigationItem">Pricing</div>
        <div className="Navbar__navigationItem">Resources</div>
      </div>
      <div className="Navbar__auth">
        <div className="Navbar__navigationItem">Login</div>
        <Button title="Sign Up" rounded small />
      </div>
    </div>
    <div className="Navbar__burger">
      <span className="Navbar__burger-slice" />
      <span className="Navbar__burger-slice" />
      <span className="Navbar__burger-slice" />
    </div>
  </nav>
);

export default Navbar;
