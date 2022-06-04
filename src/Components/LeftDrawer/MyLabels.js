import { Typography } from "@mui/material";
import data from "./../../Data/data";

const MyLabels = () => {
  return (
    <Typography
      style={{ flexGrow: 1, textAlign: "center" }}
      variant="h5"
      component="h1"
    >
      {data.lastname} <br />
      {data.firstname}
    </Typography>
  );
};

export default MyLabels;
