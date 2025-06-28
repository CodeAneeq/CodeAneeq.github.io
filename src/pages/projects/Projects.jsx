import React, { useEffect, useState } from "react";
import BasicLayout from "../../components/layout/basicLayout";
import CategoryName from "../../components/category/CategoryName";
import styles from "./projects.module.scss";
import Foodi from '../../assets/img/landingPage/Foodi.png';
import RoboMeet from '../../assets/img/landingPage/RoboMeet.png';
import Picodi from '../../assets/img/landingPage/Picodi.png';
import ProjectCard from "../../components/cards/projectCard";
import BookHeaven from '../../assets/img/frontendImg/BookHeaven.jpg';
import binaryChemist from '../../assets/img/landingPage/binaryChemist.png'
import Todo from '../../assets/img/functionallity/Todo.png';
import Weather from '../../assets/img/frontendImg/weather.jpg';
import Expense from '../../assets/img/functionallity/Expense.png';
import AgeCal from '../../assets/img/functionallity/AgeCal.png';
import careerhunt from '../../assets/img/landingPage/careerhunt.png'
import PasswordStrength from '../../assets/img/functionallity/Password.png';
import Quiz from '../../assets/img/functionallity/Quiz.png';
import Notes from '../../assets/img/functionallity/Notes.png';
import Pomodoro from '../../assets/img/functionallity/Pomodoro.png';
import LearnCodeSkills from '../../assets/img/LearnCodeSkills.png'
import CodeMart from '../../assets/img/CodeMart.jpg'

import { motion } from "framer-motion"; // Import motion from framer-motion

const Projects = () => {
  const landingPage = [
    // {
    //   projectName: "Foodi",
    //   projectDesc: "Foodi is a modern landing page for food enthusiasts, offering delicious recipes and meal ideas. Perfect for promoting your food brand.",
    //   project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
    //   url: 'https://foodi-landing-page.netlify.app/',
    //   img: Foodi,
    // },
   
     {
      projectName: "Binary Chemist",
      projectDesc: "A responsive and modern React landing page featuring Home, FAQ, and Contact sections. It integrates a real-time weather API to display current weather data for any searched location, enhancing user engagement with dynamic and useful content..",
      project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS", "React"],
      url: 'https://binarychemist-bycodeaneeq.netlify.app/',
      img: binaryChemist,
    },
    //  {
    //   projectName: "RoboMeet",
    //   projectDesc: "Robomeet is a modern landing page for simple website, made with HTML, CSS, Bootstrap and JS. This is my fist project using html and css",
    //   project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
    //   url: 'https://robomeetbycodeaneeq.netlify.app/',
    //   img: RoboMeet,
    // },
    // {
    //   projectName: "Picodi",
    //   projectDesc: "Picodi is a creative landing page. It is my first Landing page. I made this for practice bootstrap.",
    //   project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
    //   img: Picodi,
    // },
  ];

  const frontendProject = [
    {
      projectName: "Book Heaven",
      projectDesc: "A beautifully designed book library web app frontend, allowing users to browse, search, and manage their favorite books. Its elegant and intuitive interface makes it perfect for book enthusiasts.",
      project_languages: ["JavaScript", "CSS", "React", "Bootstrap", "SCSS", "Redux"],
      url: "https://book-heavenbycodeaneeq.netlify.app/",
      img: BookHeaven,
    },
     {
      projectName: "Weather",
      projectDesc: "A weather app that provides real-time weather data for any location using an API.",
      project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS", "React"],
      url: "https://weatherappbycodeaneeq.netlify.app/",
      img: Weather,
    },
  ];

  const functionalityProject = [
    {
      projectName: "Todo List",
      projectDesc: "A task management app that allows users to add, remove, and check off tasks from their to-do list.",
      project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
      img: Todo,
    },
    {
      projectName: "Expense Tracker",
      projectDesc: "An app to track personal expenses, categorize them, and visualize the spending habits.",
      project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
      url: "https://expensetracker-bycodeaneeq.netlify.app/",
      img: Expense,
    },
    // {
    //   projectName: "Age Calculator",
    //   projectDesc: "A simple app that calculates the user's age based on the given birthdate.",
    //   project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS", "React"],
    //   url: "https://agecalculator-bycodeaneeq.netlify.app/",
    //   img: AgeCal,
    // },
    // {
    //   projectName: "Password Strength Checker",
    //   projectDesc: "An app that checks the strength of a password and gives feedback on how to improve it.",
    //   project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS", "React"],
    //   url: "https://password-strength-checker-codeaneeq.netlify.app/",
    //   img: PasswordStrength,
    // },
    {
      projectName: "Quiz App",
      projectDesc: "A quiz application that lets users take a quiz, tracks their score, and displays results.",
      project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
      url: "https://quiz-bycodeaneeq.netlify.app/",
      img: Quiz,
    },
    {
      projectName: "Notes",
      projectDesc: "A note-taking app that allows users to write, edit, and delete notes.",
      project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS"],
      url: "https://notes-app-by-codeaneeq.netlify.app/",
      img: Notes,
    },
    // {
    //   projectName: "Pomodoro",
    //   projectDesc: "A productivity timer app based on the Pomodoro Technique to manage work and break sessions.",
    //   project_languages: ["HTML", "CSS", "JavaScript", "Bootstrap", "SCSS", "React"],
    //   url: "https://pomodoro-time-bycodeaneeq.netlify.app/",
    //   img: Pomodoro,
    // },
  ];

  const mernProject = [
     {
      projectName: "CodeMart",
      projectDesc: "A modern e-commerce web app frontend designed for developers, offering an extensive range of coding tools, software, and tech gadgets. It features a sleek, responsive UI for a smooth shopping experience.",
      project_languages: ["JavaScript", "CSS", "React", "Bootstrap", "SCSS", "Redux", "Node.js", "Express.js", "Mongo Db", "JWT", "Rest API'S"],
      url: "https://codemart.netlify.app/",
      img: CodeMart,
    },
     {
      projectName: "CareerHunt",
      projectDesc: "CareerHunt is a modern job portal with a clean UI, real-time job listings, and smooth navigation. Built for developers to search and post jobs easily.",
      project_languages: ["JavaScript", "CSS", "React", "Bootstrap", "SCSS", "Redux", "Node.js", "Express.js", "Mongo Db", "JWT", "Rest API'S"],
      url: "https://careeerhunt.netlify.app/",
      img: careerhunt,
    },
     {
      projectName: "LearnCodeSkills",
      projectDesc: "LearnCodeSkills is a modern LMS with a clean UI, video lectures, and progress tracking. Built for students and instructors to learn and teach easily.",
      project_languages: ["JavaScript", "CSS", "React", "Bootstrap", "SCSS", "Redux", "Node.js", "Express.js", "Mongo Db", "JWT", "Rest API'S"],
      img: LearnCodeSkills
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
            <li
              className={`${styles.last_li} ${activeCategory === "Functionality" ? styles.active : ""}`}
              onClick={() => handleCategoryClick("Functionality")}
            >
              Functionality
            </li>
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
                  <ProjectCard url={item.url} projectName={item.projectName} projectDesc={item.projectDesc} language={item.project_languages} img={item.img} />
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
                  <ProjectCard url={item.url} projectName={item.projectName} projectDesc={item.projectDesc} language={item.project_languages} img={item.img} />
                </motion.div>
              ))}
            {activeCategory === "Functionality" &&
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
              ))}
            {activeCategory === "Mern Stack" &&
              mernProject.map((item, i) => (
                <motion.div 
                  key={i} 
                  className={`${styles.project_card_div}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard url={item.url} projectName={item.projectName} projectDesc={item.projectDesc} language={item.project_languages} img={item.img} />
                </motion.div>
              ))}
          </div>
        </div>
      {/* </div> */}
    </BasicLayout>
  );
};

export default Projects;