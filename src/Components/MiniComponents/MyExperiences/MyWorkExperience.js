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
import "./particles.css";
import { useTheme } from "@mui/material/styles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const MyWorkExperience = () => {
  const theme = useTheme();
  const [swiper, setSwiper] = useState(null);
  const [beginButton, setBeginButton] = useState(true);
  const [endButton, setEndButton] = useState(false);

  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particleColors = () => {
    return theme.palette.mode === "dark" ? "#ffffff" : "#000000";
  };

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
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 15,
          interactivity: {
            detect_on: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: particleColors,
            },
            links: {
              color: particleColors,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
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
