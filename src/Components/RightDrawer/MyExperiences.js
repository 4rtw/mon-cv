import { Grid } from "@mui/material";
import MyWorkExperience from "../MiniComponents/MyExperiences/MyWorkExperience";
import MyAcademicBackground from "../MiniComponents/MyExperiences/MyAcademicBackground";
import MyTraining from "../MiniComponents/MyExperiences/MyTraining";

const MyExperiences = () => {
  return (
    <Grid container spacing={3} mt={2} mb={2}>
      <Grid item xs={12}>
        <MyWorkExperience />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <MyAcademicBackground />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <MyTraining />
      </Grid>
    </Grid>
  );
};

export default MyExperiences;
