import React from "react";
import { Stack } from "@mui/material";
import CustomText from "views/components/CustomText";

const PATH_DETAIL = [
  "Sybil-resistance based on de-centralized pseudonymous biom-etric identities;",
  "Secure, scalable, efficient, consistent, immutable, and sustainable Substrate mecha-nism;",
  "Creation, proliferation, and development of a strong and dedicated community of human nodes;",
  "Custom low-latency high-throughput sybil-resist-ant consensensus protocol;",
  "Privacy-preserving biometric processing protocols;",
  "Distributed encrypted biomet-ric templates matching;",
  "ZK-proven liveness check;",
  "EVM-compatibility with the Substrate pallet",
  "Native Humanode applications (wallets, etc);",
  "Biometric ownership;",
];

const PathDetail: React.FC = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3">
      <div className="col-start-2 md:col-start-0 col-span-3 md:col-span-3">
        <Stack spacing={3}>
          {(PATH_DETAIL ?? []).map((detail, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="3000">
              <CustomText align="left" variant="h4">
                {detail}
              </CustomText>
            </div>
          ))}
        </Stack>
      </div>
    </div>
  );
};
export default PathDetail;
