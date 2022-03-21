import React from "react";

interface Props {
  href?: string;
  content: string;
  onClick?: () => {}
}

const FooterLinkItem: React.FC<Props> = ({ href = "#", content, onClick }) => {
  return (
    <li className="nav__item" onClick={onClick}>
      <a href={href} className="nav__link">
        {content}
      </a>
    </li>
  );
};

export default FooterLinkItem;
