import React from 'react';
import './Header.scss';
import HeaderItem from '../HeaderItem/HeaderItem';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-nav"></ul>
          <HeaderItem text="Home" route="/" />
          <HeaderItem text="About" route="/about" />
          <HeaderItem text="Contact" route="/contact" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
