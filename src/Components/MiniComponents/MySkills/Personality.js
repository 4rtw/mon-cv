import { Fragment } from "react";
import { Card, Typography } from "@mui/material";

const Personality = () => {
  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Ma personnalité
      </Typography>
      <Card sx={{ padding: 2 }}>Personality</Card>
    </Fragment>
  );
};

export default Personality;
