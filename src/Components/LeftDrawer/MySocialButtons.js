import { Stack } from "@mui/material";
import data from "./../../Data/data";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const MySocialButtons = ({ setTheme, theme }) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Stack
      m={2}
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {data.contacts.social.map((element, index) => {
        return (
          <IconButton
            key={index}
            onClick={() => {
              handleClick(element.link);
            }}
          >
            {element.icon()}
          </IconButton>
        );
      })}
      <IconButton
        onClick={() => {
          setTheme();
        }}
      >
        {theme !== "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Stack>
  );
};

export default MySocialButtons;
