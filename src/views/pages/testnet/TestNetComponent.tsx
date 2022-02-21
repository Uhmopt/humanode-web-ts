import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import React from "react";
import CustomLink from "views/components/CustomLink";
import CustomText from "views/components/CustomText";
import { TEST_NET_URLS } from "config"

const TestNetComponent: React.FC = () => {
  return (
    <Grid container alignContent="center" textAlign="center" spacing={6}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <CustomText className="sm:pb-8 pb-3" color="primary" variant="h5">DESKTOP APP</CustomText>
        <CustomLink to={TEST_NET_URLS?.DESKTOP_APP ?? "#"} >
          <Button variant="outlined" className="w-64" color="inherit">
            <span className="px-8">INSTALLATION</span>
            <ArrowForwardIos />
          </Button>
        </CustomLink>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <CustomText className="sm:pb-8 pb-3" color="primary" variant="h5">GUID</CustomText>
        <CustomLink to={TEST_NET_URLS?.GUID ?? "#"} >
          <Button variant="outlined" className="w-64" color="inherit">
            <span className="px-8">SEE GUIDE</span>
            <ArrowForwardIos />
          </Button>
        </CustomLink>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <CustomText className="sm:pb-8 pb-3" color="primary" variant="h5">TELEMETRY</CustomText>
        <CustomLink to={TEST_NET_URLS?.TELEMETRY ?? "#"} >
          <Button variant="outlined" className="w-64" color="inherit">
            <span className="px-8">EXPLORE</span>
            <ArrowForwardIos />
          </Button>
        </CustomLink>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <CustomText className="sm:pb-8 pb-3" color="primary" variant="h5">EXPLORER</CustomText>
        <CustomLink to={TEST_NET_URLS?.EXPLORER ?? "#"} >
          <Button variant="outlined" className="w-64" color="inherit">
            <span className="px-8">EXPLORE</span>
            <ArrowForwardIos />
          </Button>
        </CustomLink>
      </Grid>
    </Grid>
  );
}
export default TestNetComponent
