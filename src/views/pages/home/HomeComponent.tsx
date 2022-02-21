import { Grid } from "@mui/material";
import React from "react";
import PapersButton from "views/components/buttons/PapersButton";
import PathButton from "views/components/buttons/PathButton";
import TestNetButton from "views/components/buttons/TestNetButton";

const HomeComponent: React.FC = () => {
  return (
    <div className="sm-max:absolute bottom-12 w-full">
      <Grid container justifyContent="center" textAlign="center" alignItems="center" spacing={4} >
        <Grid item>
          <PapersButton />
        </Grid>
        <Grid item>
          <PathButton />
        </Grid>
        <Grid item className="pl-4">
          <TestNetButton />
        </Grid>
      </Grid>
    </div>
  );
}
export default HomeComponent;