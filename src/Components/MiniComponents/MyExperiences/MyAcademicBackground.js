import { Fragment, useState } from "react";
import { Typography } from "@mui/material";
import data from "./../../../Data/data";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyAcademicBackground = () => {
  const [expanded, setExpanded] = useState(false);

  const myData = data.experiences.education;

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Mon parcours universitaire
      </Typography>

      {myData.map((element, index) => {
        return (
          <Accordion
            key={index}
            TransitionProps={{ unmountOnExit: true }}
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {element.niveau}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {element.details.map((element1, index1) => {
                return (
                  <Card
                    sx={{ minWidth: 275, my: 1 }}
                    variant="outlined"
                    key={index1}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {element1.date.start + " - " + element1.date.end}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {element1.content.diploma}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {element1.content.description}
                      </Typography>
                      <Typography variant="body2">
                        {element1.institution.name}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Fragment>
  );
};

export default MyAcademicBackground;
