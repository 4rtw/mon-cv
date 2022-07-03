import {
  Avatar,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

const MyExperienceCard = ({ post }) => {
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
        <Typography variant="body2">{post.content.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default MyExperienceCard;
