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
              navigate("/");
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
            Educations
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
