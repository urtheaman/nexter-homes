import React from "react";
import Realtor1 from "../assets/img/realtor-1.jpeg";
import Realtor2 from "../assets/img/realtor-2.jpeg";
import Realtor3 from "../assets/img/realtor-3.jpeg";

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        <img className="realtors__img" src={Realtor1} alt="Realtor 1" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
          <p className="realtors__sold">245 Houses Sold</p>
        </div>
        <img className="realtors__img" src={Realtor2} alt="Realtor 2" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Kim Brown</h4>
          <p className="realtors__sold">212 Houses Sold</p>
        </div>
        <img className="realtors__img" src={Realtor3} alt="Realtor 3" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
          <p className="realtors__sold">198 Houses Sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
