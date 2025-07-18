import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed py-5 px-12 w-full text-white">
      <nav className="flex items-center justify-center gap-12">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
