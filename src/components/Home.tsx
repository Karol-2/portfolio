import * as React from "react";
import "./Home.scss";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="Home-background">
      <div className="Home">
        <div className="gradient-bg">
          <div className="content">
          <div className="info">
            <p className="welcome">Hi!👋</p>
            <p className="name">I'm Karol</p>
            <p className="title">Computer Science Student</p>
          </div>
          <div className="buttons">
            <button className="hire">Hire Me</button>
            <button className="email">Copy Email</button>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
