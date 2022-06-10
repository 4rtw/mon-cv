import { Fragment, useState } from "react";
import {
  Typography,
  Card,
  ListItemText,
  Divider,
  ListItem,
  List,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";

import TrainingDescription from "./TrainingDescription";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import data from "./../../../Data/data";

const MyTraining = () => {
  const [isShowMore, setIsShowMore] = useState(true);
  const [arraySize, setArraySize] = useState(3);

  const myData = data.experiences.training;

  const setMaxArraySize = () => {
    setArraySize(isShowMore ? myData.length : 3);
  };

  const showData = myData.slice(0, arraySize);

  const expandList = () => {
    setIsShowMore(!isShowMore);
    setMaxArraySize();
  };

  const myCardAction = (
    <CardActions sx={{ width: "100%" }}>
      <IconButton
        size="large"
        sx={{ mx: "auto" }}
        onClick={() => {
          expandList();
        }}
      >
        {isShowMore ? <AddCircleOutlineIcon /> : <RemoveCircleOutlineIcon />}
      </IconButton>
    </CardActions>
  );

  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Mes formations
      </Typography>
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <List sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
            {showData.map((element, index) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={element.content.title}
                      secondary={<TrainingDescription data={element} />}
                    />
                  </ListItem>
                  {index !== showData.length - 1 ? <Divider /> : null}
                </Fragment>
              );
            })}
          </List>
        </CardContent>
        {myData.length > 3 ? myCardAction : null}
      </Card>
    </Fragment>
  );
};

export default MyTraining;
