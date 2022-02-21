import { Stack } from "@mui/material";
import { CONTACT_EMAIL, NETWORK_URLS } from "config";
import React from "react";
import TextButton from "views/components/buttons/TextButton";
import CustomText from "views/components/CustomText";

const NetworkComponent: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-7 md:grid-cols-3 md:gap-4 text-center">
        <div className="col-start-3 md:col-start-0 col-span-4 md:col-span-1">
          <Stack spacing={2} alignItems="flex-start">
            <CustomText className="md:pb-10" color="primary" variant="h5">
              COMMUNITY:
            </CustomText>
            <TextButton
              to={NETWORK_URLS?.TWITTER ?? "#"}
              target="_blank"
              variant="h5"
            >
              Twitter
            </TextButton>
            <TextButton
              to={NETWORK_URLS?.TELEGRAM ?? "#"}
              target="_blank"
              variant="h5"
            >
              Telegram
            </TextButton>
            <TextButton
              to={NETWORK_URLS?.REDDIT ?? "#"}
              target="_blank"
              variant="h5"
            >
              Reddit
            </TextButton>
            <TextButton
              to={NETWORK_URLS?.GITHUB ?? "#"}
              target="_blank"
              variant="h5"
            >
              Github
            </TextButton>
            <TextButton
              to={NETWORK_URLS?.YOUTUBE ?? "#"}
              target="_blank"
              variant="h5"
            >
              Youtube
            </TextButton>
          </Stack>
        </div>
        <div className="col-start-3 md:col-start-0 col-span-4 md:col-span-1 md:ml-6">
          <Stack spacing={2} alignItems="flex-start">
            <CustomText
              className="pt-8 md:pt-0 md:pb-10"
              color="primary"
              variant="h5"
            >
              UPDATES:
            </CustomText>
            <TextButton
              to={NETWORK_URLS?.BLOG ?? "#"}
              target="_blank"
              variant="h5"
            >
              Blog
            </TextButton>
            <TextButton
              to={NETWORK_URLS?.FORUM ?? "#"}
              target="_blank"
              variant="h5"
            >
              Forum
            </TextButton>
          </Stack>
        </div>
        <div className="col-start-3 md:col-start-0 col-span-4 md:col-span-1">
          <Stack spacing={2} alignItems="flex-start">
            <CustomText
              className="pt-8 md:pt-0 md:pb-10"
              color="primary"
              variant="h5"
            >
              WRITE TO:
            </CustomText>
            <TextButton variant="h6">{CONTACT_EMAIL}</TextButton>
          </Stack>
        </div>
      </div>
    </>
  );
};
export default NetworkComponent;
