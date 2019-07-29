import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
            tempore distinctio id fuga repellat consectetur odio nostrum
            dignissimos numquam maiores blanditiis, quidem iste sint ab, rem
            repudiandae ipsa quasi eligendi.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Shashank Chikattimala</div>
          <div>26th July 2019, 4:30 PM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
