import { Grid, Stack } from "@mui/material";
import React from "react";
import TextButton from "views/components/buttons/TextButton";
import CustomText from "views/components/CustomText";
import { PAPER_URLS } from "config"

const PaperComponent = () => {
  return (
    <>
      <Grid container spacing={10} justifyContent="center">
        <Grid item>
          <Stack spacing={3} alignItems="flex-start">
            <CustomText className="pl-2 sm:pb-6 md:pb-10" color="primary" variant="h5"  >
              PAPERS
            </CustomText>
            <TextButton to={PAPER_URLS?.WHITEPAPER ?? "#"} target="_blank" variant="h5">WhitePaper</TextButton>
            <TextButton variant="h5">LightPaper</TextButton>
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={3} alignItems="flex-start">
            <CustomText className="pl-2 sm:pb-6 md:pb-10" color="primary" variant="h5">
              TL;DR
            </CustomText>
            <TextButton variant="h5">one-paper</TextButton>
            <TextButton variant="h5">factSheet</TextButton>
            <TextButton to={PAPER_URLS?.DECK ?? "#"} target="_blank" variant="h5">deck</TextButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
export default PaperComponent;
