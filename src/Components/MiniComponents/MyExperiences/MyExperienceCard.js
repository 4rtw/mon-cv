import {
  Avatar,
  Typography,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";

const MyExperienceCard = ({ post }) => {
  const makeDescription = description => {
    return (
      <List>
        {description.map((element, index) => {
          return (
            <ListItem key={index}>
              <ListItemText
                primary={element[0]}
                secondary={
                  <Fragment>
                    {element[1]}
                    {element[2]}
                  </Fragment>
                }
              />
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        my: 2,
      }}
    >
      <CardHeader
        avatar={
          post.company.logo ? (
            <img width={50} alt="Logo" src={post.company.logo} />
          ) : (
            <Avatar alt={post.company.name} />
          )
        }
        title={post.company.name}
        subheader={post.date.start + " - " + post.date.end}
      />
      <CardContent>
        <Typography variant="h5" component="div" mb={3}>
          {post.content.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.postType}
        </Typography>
        <Typography variant="body2">
          {makeDescription(post.content.description)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyExperienceCard;
