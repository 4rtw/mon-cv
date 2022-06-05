import { Fragment } from "react";
import { Typography, Card } from "@mui/material";
import data from "./../../../Data/data";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab/";

const MyAcademicBackground = () => {
  const myData = data.experiences.education;

  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Mon parcours universitaire
      </Typography>
      <Card sx={{ padding: 2 }}>
        <Timeline position="alternate">
          {myData.map((element, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                >
                  <Typography variant="caption" color="text.secondary">
                    {element.date.start}
                  </Typography>
                  {" - "}
                  <Typography variant="caption" color="text.secondary">
                    {element.date.end}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: 3, px: 2 }}>
                  <Typography variant="h6" component="span">
                    {element.content.diploma}
                  </Typography>
                  <Typography variant="body2">
                    {element.content.description}
                  </Typography>
                  <Typography variant="subtitle1">
                    {element.institution.name}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Card>
    </Fragment>
  );
};

export default MyAcademicBackground;
