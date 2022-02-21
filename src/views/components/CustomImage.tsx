import React from "react";

export default function CustomImage({
  src = "",
  title = "",
  alt = "",
  ...props
}) {
  return <img src={src ?? ""} alt={alt || title} {...props} />;
}
