import React from "react";
import CustomLink from "views/components/CustomLink";
import image from "assets/img/button/papersButton.svg";
import imageSm from "assets/img/button/papersButtonSm.svg";
import CustomImage from "../CustomImage";

const PapersButton: React.FC = () => {
  return (
    <div className="cursor-pointer filter hover:blur transition-all duration-300">
      <CustomLink to="/paper">
        <div className="sm-max:hidden">
          <CustomImage src={image} alt="Papers" />
        </div>
        <div className="sm:hidden">
          <CustomImage src={imageSm} alt="Papers" />
        </div>
      </CustomLink>
    </div>
  );
}
export default PapersButton