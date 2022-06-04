import { Typography, Grid, Card } from "@mui/material";
import data from "./../../Data/data";
import MyInformations from "../MiniComponents/MyProfile/MyInformations";
import MyContacts from "../MiniComponents/MyProfile/MyContacts";

const MyProfile = () => {
  return (
    <Grid container spacing={3} mt={2} mb={2}>
      <Grid item xs={12} md={12} lg={5}>
        <MyInformations />
      </Grid>
      <Grid item xs={12} md={12} lg={7}>
        <MyContacts />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Un petit mot
        </Typography>
        <Card sx={{ padding: 2 }}>
          <Typography>{data.description}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MyProfile;
