import imageWhite from "assets/img/logo/logo-white.svg";
import image from "assets/img/logo/logo.svg";
import { APP_NAME } from "config";
import React from "react";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import CustomText from "./CustomText";

interface Props {
  variant?: string;
  color?: string;
}

const Logo: React.FC<Props> = ({ variant = "image", color = "primary" }) => {
  return (
    <CustomLink to="/home">
      {variant === "image" ? (
        <CustomImage
          src={color === "white" ? imageWhite : image}
          alt={APP_NAME}
          className="sm-max:w-11 sm-max:h-11"
        />
      ) : (
        <CustomText variant="h3" className="uppercase">
          {APP_NAME}
        </CustomText>
      )}
    </CustomLink>
  );
};

export default Logo;
