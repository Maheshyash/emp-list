import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to='/'>
        EMPList
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to='/'>
              create 
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to='/read'>
                Read
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;
