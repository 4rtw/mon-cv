import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
import PublicIcon from "@mui/icons-material/Public";
import { pink } from "@mui/material/colors";

const imageUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "/images/me.jpg"
    : "/mon-cv/images/me.jpg";

const data = {
  firstname: "ANDRIAMIHARIMANANA",
  lastname: "Ando Lalaina",
  gender: "Homme",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.",
  nationality: "Malagasy",
  maritalStatus: "Célibataire",
  birth: {
    date: "17 Octobre 1997",
    location: "Soavinandriana",
  },
  imageUrl,
  contacts: {
    phone: {
      data: "0342698906",
      icon: <PhoneAndroidIcon color="primary" sx={{ fontSize: 40 }} />,
    }, //String 034XXXXXXX
    email: {
      data: "ando.l.andria@gmail.com",
      icon: <EmailIcon color="secondary" sx={{ fontSize: 40 }} />,
    }, //String example@mail.com
    adress: {
      data: "LOT IAH 65 Bis A Avaratsena Itaosy",
      icon: <MapIcon color="success" sx={{ fontSize: 40 }} />,
    }, //String
    location: {
      data: { region: "Antananarivo", country: "Madagascar" },
      icon: <PublicIcon sx={{ fontSize: 40, color: pink[400] }} />,
    },
    social: [
      {
        socialNetwork: "facebook",
        link: "https://web.facebook.com/andl.andria/",
        icon: <FacebookIcon />,
      },
      {
        socialNetwork: "linkedin",
        link: "https://www.linkedin.com/in/ando-lalaina-andriamiharimanana-135417240/",
        icon: <LinkedInIcon />,
      },
      {
        socialNetwork: "github",
        link: "https://github.com/4rtw",
        icon: <GitHubIcon />,
      },
    ],
  },
  experiences: {
    professionnal: [
      {
        date: {
          start: "",
          end: "",
        },
        content: {
          title: "",
          description: "",
          link: "",
        },
        company: {
          name: "",
          website: "",
        },
        postType: "",
        imageLink: [],
      },
    ],
    education: [
      {
        date: {
          start: "",
          end: "",
        },
        content: {
          diploma: "",
          description: "",
        },
        institution: {
          name: "",
          website: "",
        },
        imageLink: [],
      },
    ],
    training: [
      {
        date: {
          start: "",
          end: "",
        },
        content: {
          title: "",
          certificate: "",
          description: "",
          trainer: {
            name: "",
            website: "",
          },
        },
        imageLink: [],
      },
    ],
  },
  skills: {
    personnality: {
      strength: [],
      weakness: [],
    },
    soft: [],
    hard: {
      technos: [
        {
          iconLink: "",
          name: "",
          value: "",
        },
      ],
      programmationLanguages: [
        {
          iconLink: "",
          name: "",
          value: "",
        },
      ],
      tools: [
        {
          iconLink: "",
          name: "",
          value: "",
        },
      ],
    },
    languages: [
      {
        name: "",
        value: 100,
      },
    ],
  },
  competitions: [
    {
      date: {
        start: "",
        end: "",
      },
      content: {
        title: "",
        competitionDescription: "",
        projectDescription: "",
      },
    },
  ],
  hobbies: [
    {
      name: "",
      iconLink: "",
      images: "",
      stuffs: [],
    },
  ],
};

export default data;
