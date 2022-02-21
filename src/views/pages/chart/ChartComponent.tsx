import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "views/components/CustomImage";
import image from "assets/img/chart.png"
import { CHART_TXT } from "config"

const TestNetComponent: React.FC = () => {
  return (
    <Grid container alignContent="center" justifyContent={"center"} alignItems="center" textAlign="start" spacing={6}>
      {/* Note: Replace Chart */}
      <Grid item lg={5} md={5} sm={8} xs={8}>
        <span className="text-base">{CHART_TXT}</span>
      </Grid>
      <CustomImage src={image} title="chart" />
    </Grid>
  );
}
export default TestNetComponent
