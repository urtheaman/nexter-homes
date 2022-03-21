import React from "react";

interface Props {
  className?: string;
  content: string;
}

const CustomButton: React.FC<Props> = ({ content, className }) => {
  return <div className={"btn " + className}>{content}</div>;
};

export default CustomButton;
