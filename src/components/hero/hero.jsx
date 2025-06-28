import React from "react";
import hero from "../../assets/img/Hero.png";
import styles from "./hero.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className={`${styles.hero_section_container}`}>
          {/* Hero Content Animation */}
          <motion.div
            className={`${styles.hero_content}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>Hello, I'm Aneeq</h1>
            <p>
              I'm a full-stack developer specializing in React.js & Node.js,
              focused on building fast, accessible, responsive, and visually
              engaging digital experiences. Even after more than a year of
              working with web technologies, my passion for creating modern web
              applications still feels as fresh as day one.
            </p>

            <div className={`${styles.hero_av}`}>
              <p className={`${styles.location}`}>
                <span className={`${styles.icon}`}>
                  <CiLocationOn />
                </span>{" "}
                Lahore, Pakistan
              </p>
              <p className={`${styles.location}`}>
                <span className={`${styles.icon}`}>
                  <AiFillPlusCircle />
                </span>{" "}
                Available For New Projects
              </p>
            </div>

            <ul className={`${styles.icons}`}>
              <a
                href="https://www.instagram.com/codeaneeq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.instagram}`}
                style={{ color: "#4B5563", textDecoration: "none" }}
              >
                <li>
                  <FaInstagram />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/codeaneeq/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkedin}`}
                style={{ color: "#4B5563", textDecoration: "none" }}
              >
                <li>
                  <FaLinkedin />
                </li>
              </a>
              <a
                href="https://github.com/CodeAneeq"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.github}`}
                style={{ color: "#4B5563", textDecoration: "none" }}
              >
                <li>
                  <FaGithub />
                </li>
              </a>
            </ul>
          </motion.div>

          {/* Hero Image Animation */}
          <motion.figure
            className={`${styles.hero_figure}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img src={hero} alt="Developer Illustration" />
          </motion.figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
