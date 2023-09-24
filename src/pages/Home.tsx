import { faClipboard, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";

export interface IHomeProps {}

const copyEmail = (): void => {
  const email: string = "k-krawczykiewicz@wp.pl";
  navigator.clipboard.writeText(email);
};

const redirectToLinkedin = (): void => {
  const link: string = "https://www.linkedin.com/in/krawczykiewicz-karol";
  window.open(link, "_blank");
};

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
              <button onClick={redirectToLinkedin} className="hire">
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
