import * as React from "react";
import "./NavBar.scss";
import { useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-element">
          <button
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            Home
          </button>
        </li>
        <li className="nav-element"><button
            onClick={() => {
              navigate("/projects");
            }}
          >
            Projects
          </button></li>
        <li className="nav-element"><button
            onClick={() => {
              navigate("/education");
            }}
          >
            Education
          </button></li>
        <li className="nav-element"> <button
            onClick={() => {
              navigate("/about-me");
            }}
          >
            About Me
          </button></li>
      </ul>
    </nav>
  );
}
