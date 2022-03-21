import React from "react";
import FeatureCard from "../components/FeatureCard";
import FEATURES_DATA from "../features.data.json";

const Features: React.FC = () => {
  return (
    <section className="features">
      {FEATURES_DATA.map(({ heading, description, vectorId }, index) => {
        return (
          <FeatureCard
            key={index}
            heading={heading}
            desc={description}
            vectorId={vectorId}
          />
        );
      })}
    </section>
  );
};

export default Features;
