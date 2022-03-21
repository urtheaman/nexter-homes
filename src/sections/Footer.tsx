import React from "react";
import FooterLinkItem from "../components/FooterLinkItem";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="nav">
        <FooterLinkItem content="Find your dream home" />
        <FooterLinkItem content="Request proposal" />
        <FooterLinkItem content="home planner" />
        <FooterLinkItem content="Contact us" />
        <FooterLinkItem content="Submit your property" />
        <FooterLinkItem content="Come work with us" />
      </ul>
      <div className="copyright">&copy; {new Date().getFullYear()} Nexter Homes. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
