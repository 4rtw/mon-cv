import Avatar from "@mui/material/Avatar";
import data from "./../../Data/data";

const MyAvatar = () => {
  return (
    <Avatar
      style={{ margin: 30 }}
      alt={data.firstname + " " + data.lastname}
      src={data.imageUrl}
      sx={{ width: 200, height: 200 }}
    />
  );
};

export default MyAvatar;
