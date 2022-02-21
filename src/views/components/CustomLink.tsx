import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import CustomText from "./CustomText";
interface Props {
  to?: string;
  target?: string;
  children?: ReactNode;
  variant?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | undefined;
  color?: string;
  className?: string;
}
const CustomLink: React.FC<Props> = ({
  to = "#",
  target = "",
  children = "",
  variant = "button",
  color = "default",
  className = "",
}) => {
  const isInternal = !String(to).includes("http");
  const isText = typeof children === "string";

  const mainRender = isText ? (
    <CustomText color={color ?? "inherit"} variant={variant}>
      {children}
    </CustomText>
  ) : (
    children
  );

  return isInternal ? (
    <Link to={to} target={target} className={`${className}`}>
      {mainRender}
    </Link>
  ) : (
    <a
      href={to}
      target={target}
      rel={target === "_blank" ? "noreferrer noopener" : ""}
      className={`${className}`}
    >
      {mainRender}
    </a>
  );
};

export default CustomLink;
