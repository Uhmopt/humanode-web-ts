import React, { ReactNode } from "react";
import CustomText from "views/components/CustomText";
import CustomLink from "views/components/CustomLink";
import { useLocation } from "react-router-dom";

interface Props {
  children?: ReactNode;
  to?: string;
  variant?: "h4" | "button" | "caption" | "h1" | "h2" | "h3" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit" | undefined;
  className?: string;
  startIcon?: ReactNode | string;
  target?: string;
}
const TextButton: React.FC<Props> = ({
  children = "",
  to = "#",
  variant = "h4",
  className = "",
  startIcon = "",
  target = ""
}) => {
  const isActive = to === useLocation().pathname;
  return (
    <CustomLink to={to} target={target}>
      <CustomText
        variant={variant ?? "h4"}
        className={`
          flex items-center
          uppercase cursor-pointer
          border-b ${isActive ? "border-white" : "border-transparent"
          } hover:border-white
          transition-all duration-200
          py-1
          ${className}
        `}
      >
        {startIcon && <div className="mr-2">{startIcon}</div>}
        {children}
      </CustomText>
    </CustomLink>
  );
}
export default TextButton