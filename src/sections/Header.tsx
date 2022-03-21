import React, { Fragment } from "react";
import CustomButton from "../custom-elements/CustomButton";
import BBC from "../assets/img/logo-bbc.png"
import Forbes from "../assets/img/logo-forbes.png"
import TechCrunch from "../assets/img/logo-techcrunch.png"
import BI from "../assets/img/logo-bi.png";
import Sidebar from "./Sidebar";
import Realtors from "./Realtors";
import Logo from "../assets/img/logo.png"

const Header: React.FC = () => {
    return (
      <Fragment>
        <Sidebar />
        <header className="header">
          <img className="header__logo" src={Logo} alt="Nexter Logo" />
          <h3 className="heading-3">Your Own Home: </h3>
          <h1 className="heading-1">The ultimate personal freedom</h1>
          <CustomButton className="header__btn" content="View our properties" />
          <div className="header__seenon-text">Seen On</div>
          <div className="header__seenon-logos">
            <img src={BBC} alt="BBC Logo" />
            <img src={Forbes} alt="Forbes Logo" />
            <img src={TechCrunch} alt="Techcrunch Logo" />
            <img src={BI} alt="Business Insider Logo" />
          </div>
        </header>
        <Realtors />
      </Fragment>
    );
}

export default Header