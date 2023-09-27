import { useState } from "react";
import "./Projects.scss";
import "../styles/layout.scss";
import repos from "../helper/repos";
import redirectToUrl from "../helper/redirectToUrl";

interface RepoDetailsType {
  name: string;
  descriptionShort: string;
  descriptionLong: string;
  repoLink: string;
  demoLink?: string;
  technologies: string[];
  date: string;
}

export default function Projects() {
  const [chosenRepo, setChosenRepo] = useState<RepoDetailsType | null>(null);

  return (
    <div className="page-background grid">
      <div className="page project-select">
        {repos.map((repo, key) => (
          <button
            className="project-button"
            key={key}
            onClick={() => setChosenRepo(repo)}
          >
            <h2>{repo.name}</h2>
            <p>{repo.descriptionShort}</p>
          </button>
        ))}
      </div>

      <div className="page project-info">
        {chosenRepo ? (
          <div className="project">
            <h1 className="title">{chosenRepo.name}</h1>
            <h2 className="date">{chosenRepo.date}</h2>
            <p className="description">{chosenRepo.descriptionLong}</p>
            <h2>Technologies:</h2>
            <div className="technologies">
              {chosenRepo.technologies.map((technology, key) => (
                <div key={key} className="technology">
                  {technology}{" "}
                </div>
              ))}
            </div>
            <div className="buttons-section">
              <button
                className="button-github"
                onClick={() => redirectToUrl(chosenRepo.repoLink)}
              >
                GITHUB REPO
              </button>
              {chosenRepo.demoLink && (
                <button
                  className="button-demo"
                  onClick={() => redirectToUrl(chosenRepo.demoLink)}
                >
                  LIVE DEMO
                </button>
              )}
            </div>
          </div>
        ) : (
          <h1 className="loading">
            {" "}
            Choose one of the projects to see it's details.{" "}
          </h1>
        )}
      </div>
    </div>
  );
}
