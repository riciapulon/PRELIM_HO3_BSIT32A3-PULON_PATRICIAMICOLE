import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/props">Props Page</Link></li>
        <li><Link to="/todo">Todo List</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
