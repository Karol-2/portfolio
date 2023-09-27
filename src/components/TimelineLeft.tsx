import * as React from "react";

export interface ITimelineLeftProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineLeft(props: ITimelineLeftProps) {
  return (
    <>
      <div className="timeline-component timeline-content">
        <h3>{props.year}</h3>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
      <div className="timeline-middle">
        <div className="timeline-circle"></div>
      </div>
      <div className="empty"></div>
    </>
  );
}
