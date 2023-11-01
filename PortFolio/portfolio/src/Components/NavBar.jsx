import React from "react";
import style from "./nav.module.css";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <nav className={`flex justify-around items-center fixed ${style.nav}`}>
      <div className="-mr-36 ml-24">Omar Sampayo</div>
      <ul className="flex ml-16">
        <li className="mr-8">
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            <button>Home</button>
          </Link>
        </li>
        <li className="mr-8">
          <Link to="exterprise" spy={true} smooth={true} offset={0} duration={500}>
            <button>My Exterprise</button>
          </Link>
        </li>
        <li className="mr-8">
          <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
            <button>Experience</button>
          </Link>
        </li>
        <li className="mr-8">
          <Link to="contactme" spy={true} smooth={true} offset={0} duration={500}>
            <button>Contact Me</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
