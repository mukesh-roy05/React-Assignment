import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar nav-link">
        <ul className="nav justify-content-center">
          <li className="nav-item active justify-content-center">
            <Link to="/all">ALL</Link>
          </li>
          <li className="nav-item active">
            <Link to="/fullstack"> FULLSTACK DEVELOPMENT </Link>
          </li>
          <li className="nav-item  active">
            <Link to="/datascience" className="navlink">
              {" "}
              DATA SCIENCE{" "}
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/cyber"> CYBER SECURITY </Link>
          </li>
          <li className="nav-item active">
            <Link to="/career"> CAREER </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
