import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "views/components/CustomImage";
import image from "assets/img/chart.png";

const ChartComponent: React.FC = () => {
  return (
    <Grid
      container
      alignContent="center"
      justifyContent={"center"}
      alignItems="center"
      textAlign="start"
      spacing={6}
    >
      {/* Note: Replace Chart */}
      <Grid item lg={5} md={5} sm={8} xs={8}>
        <span className="text-base">
          A public Humanode knowledge base that stores all the information,
          research and analytics carried out by teams assembled in Formation. It
          will also act as a base in educational sessions and programs carried
          out in Humanode;
        </span>
      </Grid>
      <CustomImage src={image} title="chart" />
    </Grid>
  );
};
export default ChartComponent;
