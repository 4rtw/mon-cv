import { Fragment } from "react";
import { Typography, Divider, Stack } from "@mui/material";
import categories from "./../Data/categories";

const RightDrawer = () => {
  return (
    <div>
      {categories.map((element, index) => {
        return (
          <Fragment key={index}>
            <Stack direction="row" alignItems="center" gap={3}>
              {element.icon}
              <Typography variant="h4" id={element.link}>
                {element.label}
              </Typography>
            </Stack>
            <Divider />
            {element.component}
          </Fragment>
        );
      })}
    </div>
  );
};

export default RightDrawer;
