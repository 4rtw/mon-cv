import { Fragment, useState } from "react";
import { Typography, IconButton } from "@mui/material";
import data from "./../../../Data/data";
import MyExperienceCard from "./MyExperienceCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const MyWorkExperience = () => {
  const [swiper, setSwiper] = useState(null);
  const [beginButton, setBeginButton] = useState(true);
  const [endButton, setEndButton] = useState(false);

  const onReachEdge = (edge) => {
    if (edge === "begin") {
      setBeginButton(true);
    } else if (edge === "end") {
      setEndButton(true);
    }
  };

  const onSwiperChange = () => {
    if (endButton) {
      setEndButton(false);
    }
    if (beginButton) {
      setBeginButton(false);
    }
  };

  return (
    <Fragment>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Mon expérience professionnelle
        <IconButton
          disabled={beginButton}
          variant="outlined"
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          disabled={endButton}
          variant="outlined"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Typography>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onReachBeginning={() => {
          onReachEdge("begin");
        }}
        onReachEnd={() => {
          onReachEdge("end");
        }}
        onSlideChange={() => {
          onSwiperChange();
        }}
      >
        {data.experiences.professionnal.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <MyExperienceCard key={index} post={element} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};

export default MyWorkExperience;
