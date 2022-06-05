import { Fragment } from "react";
import { Typography, Card } from "@mui/material";
import data from "./../../../Data/data";

const MyTraining = () => {
  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Mes formations
      </Typography>
      <Card sx={{ padding: 2 }}>
        <Typography>{data.description}</Typography>
      </Card>
    </Fragment>
  );
};

export default MyTraining;
