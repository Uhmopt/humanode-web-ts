import { ArrowBackIos } from "@mui/icons-material";
import { Box, Container } from '@mui/material';
import React, { ReactNode } from "react";
import TextButton from 'views/components/buttons/TextButton';
interface Props {
  children?: ReactNode;
  background?: string;
  showHome?: boolean;
}
const HtmlContainer: React.FC<Props> = ({
  children = "",
  background = "",
  showHome = false
}) => {
  const [back, rect] = String(background ?? "head-top").split(" ");
  return (
    <div className={`relative sm:bg-${rect} bg-center bg-fixed bg-no-repeat bg-120 sm:bg-185`}>
      {(showHome ?? false) && (
        <Container maxWidth="xl" className="">
          <Box sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <div className="fixed top-1/2 sm-max:hidden z-10">
              <TextButton
                variant="h5"
                className="opacity-40"
                startIcon={<ArrowBackIos />}
                to="/home"
              >
                Home
              </TextButton>
            </div>
          </Box>
        </Container>
      )}
      <div
        className={`
          relative
          min-h-screen
          sm:bg-${back} bg-${back}-sm
          bg-cover bg-center bg-fixed
          flex flex-col items-stretch
          overflow-x-hidden
          scroll-thumb
          transition-all duration-300
        `}
      >
        <div className="bg-head-top sm:bg-head-top sm-max:bg-head-top"></div>
        <div className="bg-head-top-sm sm:bg-head-top-sm sm-max:bg-head-top-sm"></div>
        <div className="bg-head-eye sm:bg-head-eye sm-max:bg-head-eye"></div>
        <div className="bg-head-eye-sm sm:bg-head-eye-sm sm-max:bg-head-eye-sm"></div>
        <div className="bg-head-eye-rect-sm sm:bg-head-eye-rect-sm sm-max:bg-head-eye-rect-sm"></div>
        <div className="bg-rect-01 sm:bg-rect-01 sm-max:bg-rect-01"></div>
        <div className="bg-rect-02 sm:bg-rect-02 sm-max:bg-rect-02"></div>
        <div className="bg-rect-03 sm:bg-rect-03 sm-max:bg-rect-03"></div>
        {children}
      </div>
    </div>
  );
}

export default HtmlContainer;