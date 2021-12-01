import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to='/'>
        EMPList
      </Link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to='/'>
              create 
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to='/read'>
                Read
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;
