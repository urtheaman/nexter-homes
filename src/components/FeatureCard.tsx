import React from "react";

interface Props {
  heading: string;
  desc: string;
  Vector: any;
}

const FeatureCard: React.FC<Props> = ({ heading, desc, Vector }) => {
  return (
    <div className="feature">
      <svg className="feature__icon">
        <Vector />
      </svg>
      <h4 className="heading-4 heading-4--dark">{heading}</h4>
      <p className="feature__text">{desc}</p>
    </div>
  );
};

export default FeatureCard;
