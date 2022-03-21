import React from "react";
import FeatureCard from "../components/FeatureCard";
import FEATURES_DATA from "../features.data";

const Features: React.FC = () => {
  return (
    <section className="features">
      {FEATURES_DATA.map(({ heading, description, vector }, index) => {
        return (
          <FeatureCard
            key={index}
            heading={heading}
            desc={description}
            Vector={vector}
          />
        );
      })}
    </section>
  );
};

export default Features;
