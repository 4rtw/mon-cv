import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Link } from "react-scroll";

import categories from "./../../Data/categories";

const MyLinks = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Divider />
      <List>
        {categories.map((element, index) => {
          return (
            <Link to={element.link} key={index} smooth={true}>
              <ListItemButton>
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText primary={element.label} />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

export default MyLinks;
