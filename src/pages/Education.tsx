import TimelineLeft from "../components/TimelineLeft";
import TimelineRight from "../components/TimelineRight";
import "../styles/layout.scss";
import "./Education.scss";

export interface IEducationProps {}

export default function Education(props: IEducationProps) {
  return (
    <div className="page-background">
      <div className="page">
        <div className="timeline">
          <TimelineRight
            year="2023-2024"
            title="3rd year at University of Gdańsk"
            description="Subjects: group project, Angular, 3D graphics, concurrent programming, cloud services."
          />

          <TimelineLeft
            year="2022-2023"
            title="2nd year at University of Gdańsk"
            description="Subjects: Linux, React, machine learning, Java, Go, object-ortiented programming, testing and TDD."
          />

          <TimelineRight
            year="2021-2022"
            title="1st year at University of Gdańsk"
            description="Subjects: discrete math, linear algebra, bash, functional programming, data structures, basics of webdev."
          />

          <TimelineLeft
            year="2018-2021"
            title="High School"
            description="Advanced math, physics and computer science classes. Learned basics of programming and C++."
          />
        </div>
      </div>
    </div>
  );
}
