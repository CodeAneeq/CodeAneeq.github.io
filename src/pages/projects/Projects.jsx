import React, { useEffect, useState } from "react";
import BasicLayout from "../../components/layout/basicLayout";
import CategoryName from "../../components/category/CategoryName";
import styles from "./projects.module.scss";
import ProjectCard from "../../components/cards/projectCard";
import BookHeaven from '../../assets/img/frontendImg/BookHeaven.jpg';
import binaryChemist from '../../assets/img/landingPage/binaryChemist.png'
import Todo from '../../assets/img/functionallity/Todo.png';
import Weather from '../../assets/img/frontendImg/weather.jpg';
import Expense from '../../assets/img/functionallity/Expense.png';
import careerhunt from '../../assets/img/landingPage/careerhunt.png'
import Quiz from '../../assets/img/functionallity/Quiz.png';
import Notes from '../../assets/img/functionallity/Notes.png';
import LearnCodeSkills from '../../assets/img/LearnCodeSkills.png'
import CodeMart from '../../assets/img/CodeMart1.png'
import OrbitCRM from '../../assets/img/orbitcrm.png'
import SnapBasket from '../../assets/img/snapBaskett.png'
import Estate from '../../assets/img/landingPage/Estate.jpg'

import { motion } from "framer-motion";

const Projects = () => {
  const landingPage = [
     {
      projectName: "Binary Chemist",
      projectDesc: "A responsive and modern React landing page featuring Home, FAQ, and Contact sections.",
      project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS", "React"],
      url: 'https://binarychemist-bycodeaneeq.netlify.app/',
      img: binaryChemist,
      bgColor: "brown"
    },
     {
      projectName: "Estate",
      projectDesc: "A responsive and modern React landing page featuring Home, Properties, and Contact sections. It helps a real estate company called Estate to showcase its listings and attract more clients.",
      project_languages: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
      url: 'https://estate-bycodeaneeq.netlify.app/',
      img: Estate,
      bgColor: "MidnightBlue"
    },
  ];

  const frontendProject = [
    {
      projectName: "Book Heaven",
      projectDesc: "A beautifully designed book library web app frontend, allowing users to browse, search, and manage their favorite books. Its elegant and intuitive interface makes it perfect for book enthusiasts.",
      project_languages: ["JavaScript", "CSS", "React", "Bootstrap", "SCSS", "Redux"],
      url: "https://book-heavenbycodeaneeq.netlify.app/",
      img: BookHeaven,
      bgColor: "lightpink"
    },
     {
      projectName: "Weather",
      projectDesc: "A weather app that provides real-time weather data for any location using an API.",
      project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS", "React"],
      url: "https://weatherappbycodeaneeq.netlify.app/",
      img: Weather,
      bgColor: "black"
    },
  ];

  // const functionalityProject = [
  //   {
  //     projectName: "Todo List",
  //     projectDesc: "A task management app that allows users to add, remove, and check off tasks from their to-do list.",
  //     project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
  //     img: Todo,
  //   },
  //   {
  //     projectName: "Expense Tracker",
  //     projectDesc: "An app to track personal expenses, categorize them, and visualize the spending habits.",
  //     project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
  //     url: "https://expensetracker-bycodeaneeq.netlify.app/",
  //     img: Expense,
  //   },
  //   {
  //     projectName: "Quiz App",
  //     projectDesc: "A quiz application that lets users take a quiz, tracks their score, and displays results.",
  //     project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
  //     url: "https://quiz-bycodeaneeq.netlify.app/",
  //     img: Quiz,
  //   },
  //   {
  //     projectName: "Notes",
  //     projectDesc: "A note-taking app that allows users to write, edit, and delete notes.",
  //     project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
  //     url: "https://notes-app-by-codeaneeq.netlify.app/",
  //     img: Notes,
  //   },
  // ];

  const mernProject = [
     {
      projectName: "CodeMart",
      projectDesc: "A modern MERN stack e-commerce web app offering a wide range of mobile phones, headphones, and tech gadgets. Features include a sleek, responsive UI, JWT-based authentication, and REST APIs for smooth backend operations.",
      project_languages: ["JavaScript", "CSS", "React", "Bootstrap", "SCSS", "Redux", "Node.js", "Express.js", "Mongo Db", "JWT", "Rest API'S"],
      url: "https://codemart.netlify.app",
      img: CodeMart,
      demoURL: "https://www.linkedin.com/posts/codeaneeq_mernstack-ecommerceapp-fullstackdeveloper-activity-7333486797496201216-5Z4H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuPPiYBNcZK5UNqz6fAMCCNsRoHV_lJUsQ",
      bgColor: "lightblue"
    },
     {
      projectName: "OrbitCRM",
      projectDesc: "A modern MERN stack Customer Relationship Management (CRM) web app designed to help businesses manage tasks, leads, clients, members, managers, departments, charts, notifications, and logs efficiently. Features include a responsive UI, secure JWT-based authentication, and REST APIs for smooth backend operations.",
      project_languages: ["JavaScript", "Tailwind", "React", "Redux", "Node.js", "Express.js", "Mongo DB", "JWT", "Rest API'S", "Chart.js"],
      url: "https://github.com/CodeAneeq/orbit-crm",
      img: OrbitCRM,
      demoURL: "https://www.linkedin.com/posts/codeaneeq_mernstack-crm-fullstackdeveloper-activity-7371319856865984512-Ygtj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuPPiYBNcZK5UNqz6fAMCCNsRoHV_lJUsQ",
      bgColor: "white"
    },
     {
      projectName: "SnapBasket",
      projectDesc: "A MERN stack grocery delivery web app focused on fresh produce and essential groceries. Features include a responsive UI, COD and stripe option, real-time order updates, secure JWT-based authentication, and REST APIs for smooth backend operations.",
      project_languages: ["JavaScript", "Tailwind", "React", "SCSS", "Redux", "Node.js", "Express.js", "Mongo Db", "JWT", "Rest API'S"],
      url: "https://snapbasket.netlify.app/",
      img: SnapBasket,
      demoURL: "https://www.linkedin.com/posts/codeaneeq_mernstack-ecommerce-fullstackdeveloper-activity-7362263765918113793-9Uxw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuPPiYBNcZK5UNqz6fAMCCNsRoHV_lJUsQ",
      bgColor: "lightgreen"
    },
     {
      projectName: "CareerHunt",
      projectDesc: "CareerHunt is a full-stack MERN job portal featuring a clean UI, real-time job listings, user authentication, and smooth navigation. The platform allows developers and recruiters to easily post and apply for jobs.",
      project_languages: ["JavaScript", "CSS", "React", "Bootstrap", "SCSS", "Redux", "Node.js", "Express.js", "Mongo Db", "JWT", "Rest API'S"],
      url: "https://careeer-hunt.netlify.app",
      img: careerhunt,
      demoURL: "https://www.linkedin.com/posts/codeaneeq_mernstack-jobportal-reactjs-activity-7338329923834580993-V_1j?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuPPiYBNcZK5UNqz6fAMCCNsRoHV_lJUsQ",
      bgColor: "white"
    },
     {
      projectName: "LearnCodeSkills",
      projectDesc: "LearnCodeSkills is a MERN stack Learning Management System (LMS) featuring video lectures, progress tracking, user authentication, and a clean, responsive UI. It’s built for students and instructors to learn and teach effectively.",
      project_languages: ["JavaScript", "CSS", "React", "Bootstrap", "SCSS", "Redux", "Node.js", "Express.js", "Mongo Db", "JWT", "Rest API'S"],
      img: LearnCodeSkills,
      url: "https://github.com/CodeAneeq/learncodeskills-frontend",
      demoURL: "https://www.linkedin.com/posts/codeaneeq_mernstack-lmsplatform-fullstackdeveloper-activity-7342698950744760322-y4n6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuPPiYBNcZK5UNqz6fAMCCNsRoHV_lJUsQ",
      bgColor: "lightblue"
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Landing Page");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    localStorage.setItem("activeCategory", category);
  };

  useEffect(() => {
    const savedCategory = localStorage.getItem("activeCategory");
    if (savedCategory) {
      setActiveCategory(savedCategory);
    }

    document.title = "Projects By CodeAneeq"
  }, []);

  return (
    <BasicLayout>
      {/* <div className="container"> */}
        <div className={`${styles.project_page_container}`}>
          <CategoryName category={"Work"} />
          <p>Some of the noteworthy projects I have built:</p>

          <ul className={`${styles.category_ul}`}>
            <li
              className={`${styles.first_li} ${activeCategory === "Landing Page" ? styles.active : ""}`}
              onClick={() => handleCategoryClick("Landing Page")}
            >
              Landing Page
            </li>
            <li
              className={`${activeCategory === "Frontend" ? styles.active : ""}`}
              onClick={() => handleCategoryClick("Frontend")}
            >
              Frontend
            </li>
            <li
              className={`${activeCategory === "Mern Stack" ? styles.active : ""}`}
              onClick={() => handleCategoryClick("Mern Stack")}
            >
              Mern Stack
            </li>
            {/* <li
              className={`${styles.last_li} ${activeCategory === "Functionality" ? styles.active : ""}`}
              onClick={() => handleCategoryClick("Functionality")}
            >
              Functionality
            </li> */}
          </ul>

          {/* Conditional rendering based on activeCategory */}
          <div className={`${styles.content}`}>
            {activeCategory === "Landing Page" &&
              landingPage.map((item, i) => (
                <motion.div 
                  key={i} 
                  className={`${styles.project_card_div}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard  url={item.url} projectName={item.projectName} projectDesc={item.projectDesc} language={item.project_languages} img={item.img} style={{backgroundColor: item.bgColor}} />
                </motion.div>
              ))}
            {activeCategory === "Frontend" &&
              frontendProject.map((item, i) => (
                <motion.div 
                  key={i} 
                  className={`${styles.project_card_div}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }} 
                >
                  <ProjectCard style={{backgroundColor: item.bgColor}} url={item.url} projectName={item.projectName} projectDesc={item.projectDesc} language={item.project_languages} img={item.img} />
                </motion.div>
              ))}
            {/* {activeCategory === "Functionality" &&
              functionalityProject.map((item, i) => (
                <motion.div 
                  key={i} 
                  className={`${styles.project_card_div}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard url={item.url} projectName={item.projectName} projectDesc={item.projectDesc} language={item.project_languages} img={item.img} />
                </motion.div>
              ))} */}
            {activeCategory === "Mern Stack" &&
              mernProject.map((item, i) => (
                <motion.div 
                  key={i} 
                  className={`${styles.project_card_div}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard demoURL={item.demoURL} isDemo={true} url={item.url} projectName={item.projectName} projectDesc={item.projectDesc} language={item.project_languages} img={item.img} style={{backgroundColor: item.bgColor}}/>
                </motion.div>
              ))}
          </div>
        </div>
      {/* </div> */}
    </BasicLayout>
  );
};

export default Projects;
