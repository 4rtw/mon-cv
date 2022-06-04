import { Fragment } from "react";
import { Typography, Card } from "@mui/material";
import ShowData from "./ShowData";
import data from "./../../../Data/data";

const MyInformations = () => {
  const showAge = data.birth.date;
  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Mes informations
      </Typography>
      <Card sx={{ padding: 2, minWidth: 350 }}>
        <ShowData label="Nom" data={data.firstname} />
        <ShowData label="Prénoms" data={data.lastname} />
        <ShowData label="Genre" data={data.gender} />
        <ShowData label="Nationalité" data={data.nationality} />
        <ShowData
          label="Né le"
          data={data.birth.date}
          secondLabel="à"
          secondData={data.birth.location}
        />
        <ShowData
          label="Age"
          data={
            new Date().getFullYear() -
            parseInt(showAge.substring(showAge.length - 4)) +
            " ans"
          }
        />
        <ShowData label="Situation matrimoniale" data={data.maritalStatus} />
      </Card>
    </Fragment>
  );
};

export default MyInformations;
