import { Container, Grid, Stack } from "@mui/material";
import TextButton from "views/components/buttons/TextButton";
import Logo from "views/components/Logo";
import { ABOUT_URL } from "config";
import React from "react";
const MainHeader: React.FC = () => {
  return (
    <div className="relative">
      <div className="fixed w-screen pt-10 pb-8 backdrop-blur-sm z-10">
        <Container maxWidth="xl">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <TextButton to={ABOUT_URL} target="_blank">About</TextButton>
            </Grid>
            <Grid item className="absolute left-0 w-full">
              <Stack
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Logo />
                <Logo variant="text" />
              </Stack>
            </Grid>
            <Grid item sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <TextButton to="/network">Network</TextButton>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
export default MainHeader
