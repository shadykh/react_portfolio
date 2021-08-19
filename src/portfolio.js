/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Shady Khaled",
  title: "Hi all, I'm Shady",
  subTitle: emoji(
    "A Full Stack Web Developer 👨‍💻 with engineering mindset, having an experience of building web applications 🌐 with JavaScript, Reactjs, Nodejs, React Native, HTML, CSS, SASS and some other libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-KkMlJMbfkr2L29pCzDH-Z0gvyXykYhm/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shadykh",
  linkedin: "https://www.linkedin.com/in/shadykhaled/",
  gmail: "eng.shady94@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I have",
  subTitle: "A passionate Full Stack Software Developer has those skills and is learning more ",
  skills: [
    emoji(
      "⚡ Build and contribute to a server-side and client-side application. "
    ),
    emoji("⚡ Design and create single-page web apps from scratch using MVC architecture built with HTML, CSS and JavaScript."),
    emoji(
      "⚡ Design dynamic front-end and back-end applications, which can function together or independently and are deployed to cloud platforms."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "markdown",
      fontAwesomeClassname: "fab fa-markdown"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "fas fa-cloud-upload-alt"
    },
    {
      skillName: "Netlify",
      fontAwesomeClassname: "fas fa-cloud-upload-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "LTUC-Abdul Aziz Al Ghurair School of Advanced Computing",
      logo: require("./assets/images/ltuc.jpg"),
      subHeader: "Certificate in Software Development",
      duration: "February 2021 - August 2021",
      desc: "International certificate from Code Fellows and ASAC that qualifies the student to work as a full-stack JavaScript developer in Jordan and beyond.",
    },
    {
      schoolName: "Al-Hussein Technical University",
      logo: require("./assets/images/htu.jpg"),
      subHeader: "Certificate in Industrial Automation Engineering",
      duration: "February 2020 - September 2020",
      desc: "It had been 340 hours with Khedmet Watan Program in Industrial Automation, English Language and Employability Soft Skills.",
    },
    {
      schoolName: "Jordan University of Science and Technology",
      logo: require("./assets/images/just.png"),
      subHeader: "Bachelor of Aeronautical Engineering",
      duration: "September 2012 - December  2017",
      desc: "It had been accredited by the Engineering Accreditation Commission (EAC) of ABET of the USA.",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects that I worked on with teams",
  projects: [
    {
      image: require("./assets/images/JoCultureApp.PNG"),
      projectName: "JO CULTURE",
      projectDesc: "Built with JavaScript, HTML and CSS, deployed by Heroku.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jordanian-culture.github.io/Jordanian-Culture/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/swapoApp.PNG"),
      projectName: "Swapo",
      projectDesc: "Built with JavaScript, HTML, CSS, SASS, Node.js, socket.io, React, MongoDB and Express, deployed by Netlify and Heroku.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://swapo-app.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/virtualStoreApp.PNG"),
      projectName: "Virtual Store",
      projectDesc: "Built with JavaScript, HTML, CSS, SASS, Node.js, React, MongoDB and Express, deployed by Netlify and Heroku.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://storefront-401.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Some Personal Projects you have worked on

const PersonalProjects = {
  title: "Personal Projects",
  subtitle: "Some projects that I built them",
  projects: [
    {
      image: require("./assets/images/restyApp.PNG"),
      projectName: "RESTy Application",
      projectDesc: "API testing tool that can be run in any browser, allowing a user to easily interact with APIs in a familiar interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://restyapp001.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bookApp.PNG"),
      projectName: "Book App",
      projectDesc: "Add the functionality for the user to add a book or delete a book. Hit Google API and save it to database.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shnobookapp.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/toDoApp.PNG"),
      projectName: "To-do App",
      projectDesc: "A Web Application for securely managing a To Do List.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://todo401.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications that I have done !",
  achievementsCards: [
    {
      title: "SQL for Data Science",
      subtitle:
        "Use and apply the powerful language of SQL to better communicate and extract data from databases.",
      image: require("./assets/images/ibm-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.edx.org/certificates/e23c6167ca7f47398a6227d5cac439bb"
        }
      ]
    },
    {
      title: "Data Analysis",
      subtitle:
        "Manipulate and prepare data for analysis, Structured Query Language (SQL), and leverage SQL to extract and analyze data stored in databases..",
      image: require("./assets/images/udacity-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1UZgsrbtysetvfi_Kw6OG9RaK83IznmkT/view?usp=sharing"
        }
      ]
    },

    {
      title: "Design Thinking Fundamentals",
      subtitle: "Explore methods used to evaluate problems, develop ideas, and create innovative solutions with the user in mind. ",
      image: require("./assets/images/RIT.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.edx.org/certificates/1c9cf7a489b746b59f2f78541a8bcec4"
        }
      ]
    },
    {
      title: "Effective Decision Making: Dealing with Business Complexity",
      subtitle: "Utilizing the analytical skills in a business context, allowing to unravel complex situations requiring decisions.",
      image: require("./assets/images/logo_Delft.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.edx.org/certificates/133ed83749864d7796fe853b03493137"
        }
      ]
    },
    {
      title: "AI For Everyone",
      subtitle: "The meaning behind common AI terminology, including neural networks, machine learning, deep learning, and data science.",
      image: require("./assets/images/deepAi.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/6ab7f79394d831150d2299ef748df504"
        }
      ]
    },
    {
      title: "Effective Problem-Solving and Decision-Making",
      subtitle: "Choose and apply appropriate problem solving and decision making processes and methods.",
      image: require("./assets/images/uci.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/6ab7f79394d831150d2299ef748df504"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Welcome all, my inbox is open for you.",
  number: "+962775680880",
  email_address: "eng.shady94@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  PersonalProjects
};
