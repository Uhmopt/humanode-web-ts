import React from "react";
import CustomLink from "views/components/CustomLink";
import image from "assets/img/button/pathButton.svg";
import imageSm from "assets/img/button/pathButtonSm.svg";
import CustomImage from "../CustomImage";

const PathButton: React.FC = () => {
  return (
    <div className="cursor-pointer hover:blur transition-all duration-300">
      <CustomLink to="/path">
        <div className="sm-max:hidden">
          <CustomImage src={image} alt="Path" />
        </div>
        <div className="sm:hidden">
          <CustomImage src={imageSm} alt="Papers" />
        </div>
      </CustomLink>
    </div>
  );
}
export default PathButton