import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

const BlogNav = () => {
  return (
    <div>
      <Navbar>
        <Nav.Link href="#home" style={{ color: "white" }}>
          Home
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default BlogNav;
