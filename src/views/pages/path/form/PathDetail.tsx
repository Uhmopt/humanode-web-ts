

import React from "react";
import { Stack } from "@mui/material";
import CustomText from "views/components/CustomText";
import { PATH_DETAIL } from "config"

const PathDetail: React.FC = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-3">
            <div className="col-start-2 md:col-start-0 col-span-3 md:col-span-3">
                <Stack spacing={3}>
                    {(PATH_DETAIL ?? []).map((detail, index) => (
                        <div key={index} data-aos="fade-up" data-aos-duration="3000">
                            <CustomText align="left" variant="h4">{detail}</CustomText>
                        </div>
                    ))}
                </Stack>
            </div>

        </div>

    );
}
export default PathDetail;
