import "../styles/layout.scss";
import "./AboutMe.scss";
import {
  faCode,
  faLaptopCode,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redirectToUrl from "../helper/redirectToUrl";

export interface IAboutMeProps {}

export default function AboutMe(props: IAboutMeProps) {
  const photoUrl: string =
    "https://avatars.githubusercontent.com/u/97386279?v=4";

  const githubUrl: string = "https://github.com/Karol-2";

  return (
    <div className="page-background grid">
      <div className="page basics">
        <div className="avatar-wrapper">
          <div className="circle-avatar">
            <img src={photoUrl} alt="my face :)" className="avatar"></img>
          </div>
          <p>Karol Krawczykiewicz</p>
        </div>
        <p className="work-sign">OPEN TO WORK</p>
        <div className="features">
          <p>Recent Graduate at the University of Gdańsk</p>
          <p>Computer Science, practical profile</p>
          <p>Beginner programmer</p>
          <p>Aspiring front-end developer</p>
        </div>
        <button
          className="github-button"
          onClick={() => redirectToUrl(githubUrl)}
        >
          MY GITHUB PROFILE
        </button>
      </div>
      <div className="page info">
        <div className="interests">
          <div className="logo">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <p>
            I`m a beginner programmer eager to expand my knowledge and skills in
            computer science. Recently, I finished my Bachelor's degree in Practical Computer Science
            at the University of Gdańsk. Currently I am seeking employment.
          </p>
        </div>
        <div className="interests">
          <div className="logo">
            <FontAwesomeIcon icon={faLaptopCode} />
          </div>
          <p>
            My main interests lie in game development and web application
            programming. Currently, I'm working on my Java and Angular skills.
          </p>
        </div>
        <div className="interests">
          <div className="logo">
            <FontAwesomeIcon icon={faGamepad} />
          </div>
          <p>
            In my non-work-life, I also enjoy video games, photography, star
            wars lore and ground tennis.
          </p>
        </div>
      </div>
    </div>
  );
}
