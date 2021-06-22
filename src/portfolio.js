/* Change this file to get your personal Portfolio */
// Website related settings
// # is for links

const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Hi, and welcome to my page",
  logo_name: "Rafael",
  subTitle: "Software Engineer | US Marine Veteran",
  resumeLink: "#",
  portfolio_repository: "#",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/rjgarcia299",
  // linkedin: "https://www.linkedin.com/in/rafael-garcia-835aa1120/",
  // gmail: "rafael.garcia.contact.me@gmail.com",
  // medium: "https://medium.com/@rafael.garcia.contact.me",
  // stackoverflow: "https://stackexchange.com/users/20845922/rafael-j-garcia"
  //twitter: "#"
  // Instagram and Twitter are also supported in the links!
  {
    name: "Github",
    link: "https://github.com/rjgarcia299",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rafael-garcia-835aa1120/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "rafael.garcia.contact.me@gmail.com",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "rafael.garcia.contact.me@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coding Dojo",
      logo_path: "coding_dojo.png",
      style: {
        color: "#2EC866",
      },
      profileLink: "#",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Name",
      subtitle: "Specialization 🎓",
      logo_path: "university.png",
      alt_name: "University Name",
      duration: "Year of start and end",
      descriptions: [
        "⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Machine Learning",
      subtitle: "- Udacity",
      logo_path: "udacity.jpg",
      certificate_link: "#",
      alt_name: "Udacity",
      color_code: "#03b3e4",
    },
    {
      title: "Digital Skill: AI",
      subtitle: "- Accenture",
      logo_path: "Accenture-Logo.png",
      certificate_link: "#",
      alt_name: "Accenture DS:AI",
      color_code: "rgb(255,255,255)",
    },
    {
      title: "Google Web Designer Basics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link: "#",
      alt_name: "Google",
      color_code: "rgb(255,255,255)",
    },
    {
      title: "Introduction to Data Science",
      subtitle: "- cognitiveclass.ai",
      logo_path: "ibm_logo.png",
      certificate_link: "#",
      alt_name: "IBM",
      color_code: "rgb(255,255,255)",
    },
    {
      title: "Python for Data Science",
      subtitle: "- cognitiveclass.ai",
      logo_path: "ibm_logo.png",
      certificate_link: "#",
      alt_name: "IBM",
      color_code: "rgb(255,255,255)",
    },
    {
      title: "Machine Learning with Python",
      subtitle: "- cognitiveclass.ai",
      logo_path: "ibm_logo.png",
      certificate_link: "#",
      alt_name: "IBM",
      color_code: "rgb(255,255,255)",
    },
    {
      title: "Introduction to programming using python",
      subtitle: "- Microsoft Imagine Academy Instructor",
      logo_path: "imagine.png",
      certificate_link: "#",
      alt_name: "Microsoft Imagine Academy",
      color_code: "rgb(255,255,255)",
    },
    {
      title: "GCP Business Professional Accreditation",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link: "#",
      alt_name: "Google",
      color_code: "rgb(255,255,255)",
    },
    {
      title: "Full Stack Web Development",
      subtitle: "- Ungineering",
      logo_path: "ungineering.png",
      certificate_link: "#",
      alt_name: "ungineering",
      color_code: "#EDEFF0",
    },
    {
      title: "MTA- Introduction to Python",
      subtitle: "- Microsoft",
      logo_path: "microsoft.jpg",
      certificate_link: "#",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
    {
      title: "Data Science & AI with Python",
      subtitle: "- NiiT",
      logo_path: "niit.png",
      certificate_link: "#",
      alt_name: "Niit",
      color_code: "#FFFFFF",
    },
    {
      title: "Network Ninja To Cloud Ninja",
      subtitle: "- AWS",
      logo_path: "aws.jpg",
      certificate_link: "#",
      alt_name: "AWS",
      color_code: "#232F3F",
    },
    {
      title: "Google Analytics Certification Course",
      subtitle: "- Google",
      logo_path: "analytics.png",
      certificate_link: "#",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
  ],
};
// Your Achievement Section Include Your Certification Talks and More
// to edit achievements and badges in your portfolio edit AchievementCard.js to add badges or awards etc.

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteer experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor lorem sit amet augue lacinia gravida. Morbi orci orci, varius et elit ut, placerat sollicitudin justo.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full stack web developer",
          company: "StudyMatrix™",
          company_url: "https://studymatrix.netlify.app/",
          logo_path: "studymatrix.png",
          duration: "June 2019 - PRESENT",
          location: "Kolkata, West Bengal",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          color: "#0879bf",
        },
        {
          title: "Student Member",
          company: "Industry Institute Collaboration Association",
          company_url: "http://www.nationalitassociation.in/",
          logo_path: "nationalit.png",
          duration: "July 2019 - Dec 2019",
          location: "Kolkata, West Bengal",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          color: "#9b1578",
        },
        {
          title: "Artificial Intelligence",
          company: "Indian Society of Innovative Project Research",
          company_url: "http://csksrc.org/index.html",
          logo_path: "niit.png",
          duration: "Jun 2019 - Jul 2019",
          location: "Kolkata, West Bengal",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Assit. Web Developer",
          company: "PCS Global Pvt. Ltd.",
          company_url: "https://www.pcsglobal.in/",
          logo_path: "pcs.jpg",
          duration: "May 2019 - Sep 2019",
          location: "Kolkata, West Bengal",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          color: "#ee3c26",
        },
        {
          title: "Virtual Internship in documentation",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/en-in",
          logo_path: "microsoft_logo.png",
          duration: "2nd July 2020",
          location: "work from home",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteer experience",
      experiences: [
        {
          title: "Campus Ambassador",
          company: "Eximius - IIMB",
          company_url: "https://eximius-iimb.com/",
          logo_path: "eximius.jpg",
          duration: "May 2019 - Aug 2020",
          location: "Bangalore, Karnataka",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          color: "#4285F4",
        },
        {
          title: "All India Campus Ambassador",
          company: "Awign",
          company_url: "https://www.awign.com/",
          logo_path: "awign.png",
          duration: "Apr 2019 - Jun 2020",
          location: "Kolkata, West Bengal",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          color: "#D83B01",
        },
        {
          title: "Arctic Code Vault Contributor",
          company: "Github",
          company_url: "https://github.com/tamojit-123",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          color: "#181717",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/tamojit-123",
          logo_path: "github_logo.png",
          duration: "July 2020 - PRESENT",
          location: "Work From Home",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tamojit_das.png",
    avatar_image_path: "socialmedia.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "#",
    avatar_image_path: "choice.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar_image_path: "address.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 xxxxxxxxxx",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
