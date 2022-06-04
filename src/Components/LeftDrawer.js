import { Grid, Box } from "@mui/material";
import MyAvatar from "./LeftDrawer/MyAvatar";
import MyLabels from "./LeftDrawer/MyLabels";
import MySocialButtons from "./LeftDrawer/MySocialButtons";
import MyLinks from "./LeftDrawer/MyLinks";

const LeftDrawer = ({ setTheme, theme }) => {
  const showElements = [
    <MyAvatar />,
    <MyLabels />,
    <MySocialButtons setTheme={setTheme} theme={theme} />,
    <MyLinks />,
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {showElements.map((element, index) => {
          return (
            <Grid
              item
              justifyContent="center"
              alignItems="center"
              key={index}
              style={{ width: "100%" }}
            >
              {element}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LeftDrawer;
