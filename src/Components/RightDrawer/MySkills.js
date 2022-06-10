import { Grid } from "@mui/material";
import HardSkills from "../MiniComponents/MySkills/HardSkills";
import SoftSkills from "../MiniComponents/MySkills/SoftSkills";
import Personality from "../MiniComponents/MySkills/Personality";

const MySkills = () => {
  return (
    <Grid container spacing={3} mt={2} mb={2}>
      <Grid item xs={12} md={6} lg={6}>
        <Personality />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SoftSkills />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <HardSkills />
      </Grid>
    </Grid>
  );
};

export default MySkills;
