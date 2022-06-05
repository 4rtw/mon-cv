import { Fragment, useState, useEffect } from "react";
import { Typography, Grid, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import data from "./../../../Data/data";
import MyExperienceCard from "./MyExperienceCard";
import Carousel from "react-material-ui-carousel";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const MyWorkExperience = () => {
  const theme = useTheme();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [chunkSize, setChunckSize] = useState(3);
  const matchXs = useMediaQuery(theme.breakpoints.up("xs"));
  const matchMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchLg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (matchXs) {
      setChunckSize(1);
    }
    if (matchMd) {
      setChunckSize(2);
    }
    if (matchLg) {
      setChunckSize(3);
    }
  }, [matchXs, matchMd, matchLg]);

  function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }

  const children = [...chunks(data.experiences.professionnal, chunkSize)];

  useEffect(() => {
    if (carouselIndex < 0) {
      setCarouselIndex(0);
    }

    if (carouselIndex > children.length - 1) {
      setCarouselIndex(children.length - 1);
    }
  }, [carouselIndex, children.length]);

  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Mon expérience professionnelle{" "}
        <IconButton
          variant="outlined"
          onClick={() => {
            setCarouselIndex(carouselIndex - 1);
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          variant="outlined"
          onClick={() => {
            setCarouselIndex(carouselIndex + 1);
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Typography>
      <Carousel
        autoPlay={false}
        index={carouselIndex}
        animation="slide"
        duration={400}
        cycleNavigation={true}
        navButtonsAlwaysInvisible={true}
        fullHeightHover={true}
        onChange={(now, previous) => {
          setCarouselIndex(now);
        }}
      >
        {children.map((element, index) => {
          return (
            <Grid container key={index} spacing={3} alignItems="stretch">
              {element.map((element2, index2) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={index2}>
                    <MyExperienceCard post={element2} />
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default MyWorkExperience;
