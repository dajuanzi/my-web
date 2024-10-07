import React from "react";

const Timeline = () => {
  const milestones = [
    { year: 2021, description: "Started at IBM as AI Engineer" },
    { year: 2022, description: "Spoke at tech conference" },
    { year: 2023, description: "Promoted to Senior Engineer" },
  ];

  return (
    <div className="timeline-container">
      <h2>Career Path</h2>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{milestone.year}</div>
            <p>{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
