import { Button, Grid, Stack } from "@mui/material";
import image from "assets/img/rects/rect-01-sm.svg";
import React from "react";
import CustomImage from "views/components/CustomImage";
import CustomLink from "views/components/CustomLink";
import CustomText from "views/components/CustomText";

const PathMain: React.FC = () => {
  return (
    <>
      <Stack spacing={3} alignItems="center" className="w-full">
        <Grid container justifyContent="center">
          <Grid item lg={4} md={4} sm={12} xs={12} className="md:pt-0">
            <CustomText className="pb-6" variant="h5">
              TESTNET
            </CustomText>
            <CustomText className="opacity-20" variant="h5">
              OCT 2021
            </CustomText>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <CustomImage
              src={image}
              className="w-7 sm:w-28 m-auto pt-6 sm:pt-0"
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <CustomText className="pb-6" variant="h5">
              MAINNET
            </CustomText>
            <CustomText className="opacity-20" variant="h5">
              JUN 2022
            </CustomText>
            <CustomImage
              src={image}
              className="w-7 m-auto sm:hidden pt-6 sm:pt-0"
            />
          </Grid>
        </Grid>
        <CustomText className="py-4 flex flex-col sm:flex-row" variant="h5">
          <span>FULL</span> <span>DECENTRALIZATION</span>
        </CustomText>
        <CustomText className="opacity-20 pb-4" variant="h5">
          JUN 2026
        </CustomText>
        <CustomLink to="/path/detail">
          <Button variant="outlined" color="inherit">
            <span className="px-16">See More</span>
          </Button>
        </CustomLink>
      </Stack>
    </>
  );
};
export default PathMain;
