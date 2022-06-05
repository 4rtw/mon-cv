import { Fragment } from "react";
import ShowContacts from "./ShowContacts";
import { Grid, Typography, Card, Link } from "@mui/material";
import data from "./../../../Data/data";

const MyContacts = () => {
  const cardPadding = { pt: 1, pl: 1, pr: 1, pb: 1 };

  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Mes contacts
      </Typography>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="stretch"
        justifyContent="flex-start"
      >
        <Grid item xs={12} md={6} lg={6}>
          <Card sx={cardPadding}>
            <ShowContacts
              icon={data.contacts.phone.icon}
              label="Téléphone"
              data={
                <Link href={"tel:" + data.contacts.phone.data}>
                  {data.contacts.phone.data}
                </Link>
              }
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Card sx={cardPadding}>
            <ShowContacts
              icon={data.contacts.email.icon}
              label="Email"
              data={
                <Link href={"mailto:" + data.contacts.email.data}>
                  {data.contacts.email.data}
                </Link>
              }
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Card sx={cardPadding}>
            <ShowContacts
              icon={data.contacts.adress.icon}
              label="Adresse"
              data={data.contacts.adress.data}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Card sx={cardPadding}>
            <ShowContacts
              icon={data.contacts.social[1].icon({
                fontSize: 40,
                color: "#0072b1",
              })}
              label="LinkedIn"
              data={
                <Link href={data.contacts.social[1].link} target="_blank">
                  Voir le profil
                </Link>
              }
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Card sx={cardPadding}>
            <ShowContacts
              icon={data.contacts.social[0].icon({
                fontSize: 40,
                color: "#4267B2",
              })}
              label="Facebook"
              data={
                <Link href={data.contacts.social[0].link} target="_blank">
                  Voir le profil
                </Link>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MyContacts;
