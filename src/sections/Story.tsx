import React, { Fragment } from "react";
import Story1Img from "../assets/img/story-1.jpeg";
import Story2Img from "../assets/img/story-2.jpeg";
import CustomButton from "../custom-elements/CustomButton";

const Story: React.FC = () => {
  return (
    <Fragment>
      <div className="story__pictures">
        <img
          className="story__img--1"
          src={Story1Img}
          alt="Couple with the new house"
        />
        <img className="story__img--2" src={Story2Img} alt="New house" />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          “The best decision of our lives”
        </h2>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <CustomButton content="Find your own home" />
      </div>
    </Fragment>
  );
};

export default Story;
