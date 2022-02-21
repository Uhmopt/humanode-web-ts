import React from "react";
import MainHeader from "views/layouts/headers/MainHeader";

const Header: React.FC = ({ ...props }) => {
  return (
    <React.Fragment {...props}>
      <MainHeader />
    </React.Fragment>
  );
};
export default Header;
