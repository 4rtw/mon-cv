import { Fragment } from "react";
import { Card, Typography } from "@mui/material";

const SoftSkills = () => {
  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Mes compétences générales
      </Typography>
      <Card sx={{ padding: 2 }}>SoftSkills</Card>
    </Fragment>
  );
};

export default SoftSkills;
