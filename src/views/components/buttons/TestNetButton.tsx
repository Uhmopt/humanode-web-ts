import React from "react";
import CustomLink from "views/components/CustomLink";
import image from "assets/img/button/testNetButton.svg";
import imageSm from "assets/img/button/testNetButtonSm.svg";
import CustomImage from "../CustomImage";

const TestNetButton: React.FC = () => {
  return (
    <div className="cursor-pointer hover:blur transition-all duration-300">
      <CustomLink to="/testnet">
        <div className="sm-max:hidden">
          <CustomImage src={image} alt="TestNet" />
        </div>
        <div className="sm:hidden">
          <CustomImage src={imageSm} alt="Papers" />
        </div>
      </CustomLink>
    </div>
  );
}
export default TestNetButton