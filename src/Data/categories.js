import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ConstructionIcon from "@mui/icons-material/Construction";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import MyProfile from "../Components/RightDrawer/MyProfile";
import MyExperiences from "../Components/RightDrawer/MyExperiences";
import MySkills from "../Components/RightDrawer/MySkills";
import MyHobbies from "../Components/RightDrawer/MyHobbies";
import MyOtherActivities from "../Components/RightDrawer/MyOtherActivities";

const categories = [
  {
    label: "Mon profile",
    icon: <PersonIcon />,
    link: "my-profile",
    component: <MyProfile />,
  },
  {
    label: "Mes expériences",
    icon: <BusinessCenterIcon />,
    link: "my-experiences",
    component: <MyExperiences />,
  },
  {
    label: "Mes compétences",
    icon: <ConstructionIcon />,
    link: "my-skills",
    component: <MySkills />,
  },
  {
    label: "Mes loisirs",
    icon: <EmojiEmotionsIcon />,
    link: "my-hobbies",
    component: <MyHobbies />,
  },
  {
    label: "Mes autres activités",
    icon: <EmojiEventsIcon />,
    link: "my-other-activities",
    component: <MyOtherActivities />,
  },
];

export default categories;
