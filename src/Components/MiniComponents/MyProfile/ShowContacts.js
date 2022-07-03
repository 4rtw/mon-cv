import { Grid, Typography } from "@mui/material";

const ShowContacts = ({ label, icon, data }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        {icon}
      </Grid>
      <Grid item container xs={9}>
        <Grid item xs={12}>
          <Typography color="text.secondary">{label}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{data}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShowContacts;
