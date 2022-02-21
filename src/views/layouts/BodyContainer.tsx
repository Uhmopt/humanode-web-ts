import React from "react";

const BodyContainer: React.FC = ({ children = "" }) => {
  return (
    <div className="relative flex-grow max-h-full flex justify-center overflow-hidden">
      <div className="absolute h-full w-full pt-4 overflow-auto scroll-thumb">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default BodyContainer;