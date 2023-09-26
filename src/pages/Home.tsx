import { faClipboard, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redirectToUrl from "../helper/redirectToUrl";
import "./Home.scss";
import "../styles/layout.scss"

export interface IHomeProps {}

const copyEmail = (): void => {
  const email: string = "k-krawczykiewicz@wp.pl";
  navigator.clipboard.writeText(email);
};

const link: string = "https://www.linkedin.com/in/krawczykiewicz-karol";

export default function Home(props: IHomeProps) {
  return (
    <div className="page-background">
      <div className="page">
        <div className="gradient-bg">
          <div className="content">
            <div className="info">
              <p className="welcome">Hi!👋</p>
              <p className="name">I'm Karol</p>
              <p className="title">Computer Science Student</p>
            </div>
            <div className="buttons">
              <button onClick={()=> redirectToUrl(link)} className="hire">
                <FontAwesomeIcon icon={faCoffee} />
                <p>Hire Me</p>
              </button>
              <button onClick={copyEmail} className="email">
                <FontAwesomeIcon icon={faClipboard} />
                <p>Copy Email</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
