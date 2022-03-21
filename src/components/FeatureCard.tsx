import React from "react";

interface Props {
  heading: string;
  desc: string;
  vectorId: string;
}

const FeatureCard: React.FC<Props> = ({ heading, desc, vectorId }) => {
  return (
    <div className="feature">
      <svg className="feature__icon">
        <use xlinkHref={`../assets/img/sprite.svg#${vectorId}`}></use>
      </svg>
      <h4 className="heading-4 heading-4--dark">{heading}</h4>
      <p className="feature__text">{desc}</p>
    </div>
  );
};

export default FeatureCard;
