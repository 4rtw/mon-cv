import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import { pink } from "@mui/material/colors";

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
  imageUrl: "/mon-cv/images/me.jpg",
  contacts: {
    phone: {
      data: "0342698906",
      icon: <LocalPhoneIcon color="primary" sx={{ fontSize: 40 }} />,
    },
    email: {
      data: "ando.l.andria@gmail.com",
      icon: <EmailIcon color="secondary" sx={{ fontSize: 40 }} />,
    },
    adress: {
      data: "LOT IAH 65 Bis A Avaratsena Itaosy",
      icon: <LocationOnIcon color="success" sx={{ fontSize: 40 }} />,
    },
    location: {
      data: { region: "Antananarivo", country: "Madagascar" },
      icon: <PublicIcon sx={{ fontSize: 40, color: pink[400] }} />,
    },
    social: [
      {
        socialNetwork: "facebook",
        link: "https://web.facebook.com/andl.andria/",
        icon: (style, color) => {
          return <FacebookIcon sx={style} color={color} />;
        },
        label: "Ando Lalaina",
      },
      {
        socialNetwork: "linkedin",
        link: "https://www.linkedin.com/in/ando-lalaina-andriamiharimanana-135417240/",
        icon: (style, color) => {
          return <LinkedInIcon sx={style} color={color} />;
        },
        label: "Andriamiharimanana Ando Lalaina",
      },
      {
        socialNetwork: "github",
        link: "https://github.com/4rtw",
        icon: (style, color) => {
          return <GitHubIcon sx={style} color={color} />;
        },
        label: "4rtw",
      },
    ],
  },
  experiences: {
    professionnal: [
      {
        date: {
          start: "Mars 2016",
          end: "Avril 2017",
        },
        content: {
          title: "Développeur Angular",
          shortDescription: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.",
          link: "z",
        },
        company: {
          name: "IS2M Madagascar",
          logo: "/mon-cv/images/logo/logo_is2m.png",
          website: "",
        },
        postType: "Emploi à temps partiel",
        imageLink: [],
      },
      {
        date: {
          start: "Mars 2014",
          end: "Avril 2015",
        },
        content: {
          title: "Développeur ReaazdzadazctJS",
          shortDescription: "",
          description:
            "Lorem ipsumazd dolor sit amet, consectetur adipiscin in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.",
          link: "z",
        },
        company: {
          name: "IS2M Maazddagascar",
          website: "",
        },
        postType: "",
        imageLink: [],
      },
      {
        date: {
          start: "Mars 2014",
          end: "Avril 2015",
        },
        content: {
          title: "Développeazdazdazdur ReactJS",
          shortDescription: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.",
          link: "z",
        },
        company: {
          name: "IS2M Madagascar",
          website: "",
        },
        postType: "",
        imageLink: [],
      },
      {
        date: {
          start: "Mars 2014",
          end: "Avril 2015",
        },
        content: {
          title: "Développeur ReactJS",
          shortDescription: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscin in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.",
          link: "z",
        },
        company: {
          name: "IS2M Madagascar",
          website: "",
        },
        postType: "",
        imageLink: [],
      },
      {
        date: {
          start: "Mars 2014",
          end: "Avril 2015",
        },
        content: {
          title: "Développeur ReactJS",
          shortDescription: "",
          description:
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aquis viverra nibh cras.",
          link: "z",
        },
        company: {
          name: "IS2M Madagascar",
          website: "",
        },
        postType: "",
        imageLink: [],
      },
      {
        date: {
          start: "Mars 2014",
          end: "Avril 2015",
        },
        content: {
          title: "Développeur ReactJS",
          shortDescription: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.",
          link: "z",
        },
        company: {
          name: "IS2M Madagascar",
          website: "",
        },
        postType: "",
        imageLink: [],
      },
      {
        date: {
          start: "Mars 2014",
          end: "Avril 2015",
        },
        content: {
          title: "Développeur ReactJS",
          shortDescription: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscin in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.",
          link: "z",
        },
        company: {
          name: "IS2M Madagascar",
          website: "",
        },
        postType: "",
        imageLink: [],
      },
      {
        date: {
          start: "Mars 2014",
          end: "Avril 2015",
        },
        content: {
          title: "Développeur ReactJS",
          shortDescription: "",
          description:
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aquis viverra nibh cras.",
          link: "z",
        },
        company: {
          name: "IS2M Madagascar",
          website: "",
        },
        postType: "",
        imageLink: [],
      },
    ],
    education: [
      {
        niveau: "Master",
        details: [
          {
            date: {
              start: "Fevrier 2020",
              end: "Octobre 2021",
            },
            content: {
              diploma: "Master II",
              description: "Mobiquité Big Data et intégration Système",
            },
            institution: {
              name: "Université Côte d'Azur - Antenne Madagascar (IT University)",
              website: "",
              logo: "/mon-cv/images/logo/logo_uca.png",
            },
            imageLink: [],
          },
          {
            date: {
              start: "Fevrier 2019",
              end: "Fevrier 2020",
            },
            content: {
              diploma: "Master I",
              description: "Mobiquité Big Data et intégration Système",
            },
            institution: {
              name: "IT University",
              website: "",
              logo: "/mon-cv/images/logo/logo_itu.png",
            },
            imageLink: [],
          },
        ],
      },
      {
        niveau: "Licence",
        details: [
          {
            date: {
              start: "Fevrier 2020",
              end: "Fevrier 2019",
            },
            content: {
              diploma: "Licence III",
              description: "Mathématiques Appliqués et Informatique",
            },
            institution: {
              name: "IS2M Madagascar",
              website: "",
              logo: "/mon-cv/images/logo/logo_is2m.png",
            },
            imageLink: [],
          },
          {
            date: {
              start: "Fevrier 2020",
              end: "Fevrier 2019",
            },
            content: {
              diploma: "Licence II",
              description: "Mathématiques Appliqués et Informatique",
            },
            institution: {
              name: "IS2M Madagascar",
              website: "",
              logo: "/mon-cv/images/logo/logo_is2m.png",
            },
            imageLink: [],
          },
          {
            date: {
              start: "Fevrier 2020",
              end: "Fevrier 2019",
            },
            content: {
              diploma: "Licence I",
              description: "Mathématiques Appliqués et Informatique",
            },
            institution: {
              name: "IS2M Madagascar",
              website: "",
              logo: "/mon-cv/images/logo/logo_is2m.png",
            },
            imageLink: [],
          },
        ],
      },
      {
        niveau: "Baccalauréat",
        details: [
          {
            date: {
              start: "Fevrier 2020",
              end: "Fevrier 2019",
            },
            content: {
              diploma: "Licence III",
              description: "Mathématiques Appliqués et Informatique",
            },
            institution: {
              name: "IS2M Madagascar",
              website: "",
              logo: "/mon-cv/images/logo/logo_is2m.png",
            },
            imageLink: [],
          },
        ],
      },
    ],
    training: [
      {
        date: {
          start: "Mai 2022",
          end: "Mai 2022",
        },
        content: {
          title: "Initiation au développement mobile",
          certificate: "Aucun",
          description: "Desc",
          trainer: {
            name: "Orange Digital Center",
            website: "",
          },
        },
        imageLink: [],
      },
      {
        date: {
          start: "Mai 2022",
          end: "Mai 2022",
        },
        content: {
          title: "Initiation au développement mobile",
          certificate: "Aucun",
          description: "sss",
          trainer: {
            name: "Orange Digital Center",
            website: "",
          },
        },
        imageLink: [],
      },
      {
        date: {
          start: "Mai 2022",
          end: "Mai 2022",
        },
        content: {
          title: "Initiation au développement mobile",
          certificate: "Aucun",
          description: "",
          trainer: {
            name: "Orange Digital Center",
            website: "",
          },
        },
        imageLink: [],
      },
      {
        date: {
          start: "Mai 2022",
          end: "Mai 2022",
        },
        content: {
          title: "Initiation au développement mobile",
          certificate: "Aucun",
          description: "",
          trainer: {
            name: "Orange Digital Center",
            website: "",
          },
        },
        imageLink: [],
      },
      {
        date: {
          start: "Mai 2022",
          end: "Mai 2022",
        },
        content: {
          title: "Initiation au développement mobile",
          certificate: "Aucun",
          description: "",
          trainer: {
            name: "Orange Digital Center",
            website: "",
          },
        },
        imageLink: [],
      },
      {
        date: {
          start: "Mai 2022",
          end: "Mai 2022",
        },
        content: {
          title: "Initiation au développement mobile",
          certificate: "Aucun",
          description: "",
          trainer: {
            name: "Orange Digital Center",
            website: "",
          },
        },
        imageLink: [],
      },
      {
        date: {
          start: "Mai 2022",
          end: "Mai 2022",
        },
        content: {
          title: "Initiation au développement mobile",
          certificate: "Aucun",
          description: "",
          trainer: {
            name: "Orange Digital Center",
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
