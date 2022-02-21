import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
  shadow?: boolean;
  component?: string;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  bold?: boolean;
  span?: boolean;
  color?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
}

const CustomText: React.FC<Props> = ({
  className = "",
  children = "",
  shadow = false,
  component = "div",
  align = "center",
  bold = false,
  span = false,
  variant = "body1",
  ...props
}) => {
  return (
    <Typography
      {...props}
      component={span ? "span" : "div"}
      align={align}
      className={`${shadow ? `drop-shadow` : ``}
      text-${props?.color ?? ""}
      ${className} `}
      fontWeight={bold ? "bold" : ""}
      variant={variant}
    >
      {children}
    </Typography>
  );
};

export default CustomText;
