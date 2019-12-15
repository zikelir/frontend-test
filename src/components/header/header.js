import React from 'react';
import { Link } from "@reach/router";
import './header.css';

function Header() {
  return (
    <div className="header-bar">
        <div className="search-area">
          <input type="text" placeholder="search" className="search-bar"></input>
          <button className="search-button">Search</button>
        </div>
        <Link to="/" className="back-button"> {`<`} Back</Link>
    </div>
  );
}

export default Header;
