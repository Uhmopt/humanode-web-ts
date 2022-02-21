import React from "react";

const Body: React.FC = ({ children = "" }) => {
  return (
    <div
      id="page_container"
      className="flex-grow flex flex-col justify-center items-stretch"
    >
      {children}
    </div>
  );
};
export default Body;
