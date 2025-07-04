import React from "react";
import Hero from "../../components/hero/hero";
import BasicLayout from "../../components/layout/basicLayout";
import styles from "./home.module.scss";
import CategoryName from "../../components/category/CategoryName";
import SkillCard from "../../components/cards/skillCard";
import careerhunt from '../../assets/img/landingPage/careerhunt.png'

import Js from "../../assets/img/JS.svg";
import NodeJs from "../../assets/img/NodeJs.svg";
import ReactSvg from "../../assets/img/React.svg";
import ExpressJs from "../../assets/img/ExpressJs.svg";
import MongoDB from "../../assets/img/MongoDB.svg";
import Sass from "../../assets/img/Scss.svg";
import Git from "../../assets/img/Git.svg";
import Bootstrap from "../../assets/img/Bootstrap.svg";
import HTML from "../../assets/img/HTML.png";
import CSS from "../../assets/img/CSS.png";
import Wordpress from "../../assets/img/Wordpress.png";
import Shopify from "../../assets/img/Shopify.svg";
import Elementor from "../../assets/img/Elementor.png";
import WooCommerce from "../../assets/img/Woo.png";
import Tailwand from "../../assets/img/Tailwand.svg";
import Figma from "../../assets/img/Figma.webp";
import { FaLaptop } from "react-icons/fa6";
import Service from "../../components/servicesComponent/Service";
import PrimaryBtn from "../../components/btns/primaryBtn";
import ProjectCard from "../../components/cards/projectCard";

import img from "../../assets/img/Wingie.webp";
import AboutMe from "../../components/aboutme/AboutMe";
import TestonimalSlider from "../../components/testonimals/TestonimalSlider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaCode } from "react-icons/fa";
import { MdMobileScreenShare } from "react-icons/md";

const Home = () => {
  const skillsOBJ = [
    { img: HTML, name: "HTML" },
    { img: CSS, name: "CSS" },
    { img: Js, name: "JavaScript" },
    { img: ReactSvg, name: "React.js" },
    { img: NodeJs, name: "Node.js" },
    { img: ExpressJs, name: "Express.js" },
    { img: MongoDB, name: "MongoDB" },
    { img: Git, name: "Git" },
  ];
  const skillsOBJ2 = [
        { img: Figma, name: "Figma" },
    { img: Sass, name: "Sass" },
    { img: Bootstrap, name: "Bootstrap" },
    { img: Tailwand, name: "Tailwind CSS" },
    { img: Shopify, name: "Shopify" },
    { img: Wordpress, name: "WordPress" },
    { img: Elementor, name: "Elementor" },
    { img: WooCommerce, name: "WooCommerce" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <BasicLayout>
        <div className={`${styles.home_container}`}>
          <Hero />

          {/* Skills Section */}
          <motion.div 
            className={`${styles.skills_section} ${styles.an}`}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              <CategoryName category={"Skills"} />
              <p className={`${styles.service_desc} ${styles.skill_p}`}>
                The skills, tools and technologies I am really good at:
              </p>
    <div className={styles.skills_marquee}>
      <div className={styles.skills_track}>
        {skillsOBJ.concat(skillsOBJ).map((item, i) => (  // 👈 Duplicate array for smooth loop
          <SkillCard key={i} img={item.img} name={item.name} />
        ))}
      </div>
    </div>
    {/* Row 2 - Right to Left */}
<div className={`${styles.skills_marquee} ${styles.reverse}`}>
  <div className={styles.skills_track}>
    {skillsOBJ2.concat(skillsOBJ2).map((item, i) => (
      <SkillCard key={i} img={item.img} name={item.name} />
    ))}
  </div>
  </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            className={`${styles.service_section} ${styles.an}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              <CategoryName category={"Services"} />
              <p className={`${styles.service_desc}`}>
                We Offered Responsive Websites & Web Apps, and Full Stack Web
                Apps Development.
              </p>
              <div className={`${styles.service_cards}`}>
                <Service
                  icon={<MdMobileScreenShare />}
                  service={"Custom Web Apps"}
                  serDesc={
                    "We build fast, scalable, and user-friendly web apps using the MERN stack, designed to handle heavy traffic and complex workflows with high performance and reliability."
                  }
                />
                <Service
                  icon={<FaCode />}
                  service={"Backend Development"}
                  serDesc={
                    "We create robust and scalable backends handling user authentication, database management, and custom APIs to power high-performing web apps."}
                />
              </div>
              <div className={`${styles.btn_Div}`}>
                <div className={`${styles.ser_btn}`}>
                  <Link to='/services'><PrimaryBtn>View More</PrimaryBtn></Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Section */}
          <motion.div 
            className={`${styles.project_section} ${styles.an}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              <CategoryName category={"Work"} />
              <p className={`${styles.service_desc}`}>
                Some of the noteworthy projects I have built:
              </p>
              <div className={`${styles.projects_card}`}>
                <ProjectCard

                  className={styles.rev}
                  projectName={"CareerHunt"}
                  projectDesc={
                    "CareerHunt is a modern job portal with a clean UI, real-time job listings, and smooth navigation. Built for developers to search and post jobs easily."
                  }
                  language={["JavaScript", "CSS", "React", "Bootstrap", "SCSS", "Redux", "Node.js", "Express.js", "Mongo Db", "JWT", "Rest API'S"]}
                  url={"https://careeerhunt.netlify.app/"}
                  img={careerhunt}
                />
                {/* Repeat ProjectCard as needed */}
                <div className={`${styles.btn_Div}`}>
                  <div className={`${styles.ser_btn}`}>
                    <Link to='/projects'>
                      <PrimaryBtn>View More</PrimaryBtn>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Me Section */}
          <motion.div 
            className={`${styles.about_me} ${styles.an}`}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              <CategoryName category={"About Me"} />
              <div className={`${styles.about_card}`}>
                <AboutMe />
              </div>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div 
            className={`${styles.testonimals_section} ${styles.an}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              <CategoryName category={"Testimonials"} />
              <p className={`${styles.service_desc}`}>
                Nice things people have said about me:
              </p>
              <div>
                <TestonimalSlider />
              </div>
            </div>
          </motion.div>
        </div>
      </BasicLayout>
    </div>
  );
};

export default Home;