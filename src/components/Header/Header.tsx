import React from 'react';
import './Header.scss';
import HeaderItem from '../HeaderItem/HeaderItem';

const Header: React.FunctionComponent<{}> = () => {
  return (
    <header className="main-header">
      <div className="container">
        <img
          src="https://codecta.com/wp-content/uploads/2021/01/Codeta-Logo_white-1.png"
          width="170"
          height="95"
          alt="Flexbox.ninja"
        />
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
