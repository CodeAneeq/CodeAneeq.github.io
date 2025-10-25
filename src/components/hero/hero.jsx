import React from "react";
import hero from "../../assets/img/avator.png";
import styles from "./hero.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "../../components/background/heroBg";

const Hero = () => {
  return (
    <div className={styles.hero_wrapper}>
      {/* ✅ Background */}
      <div className={styles.bg_wrapper}>
           <Particles
    particleColors={['#00FFC8']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
      </div>

      {/* ✅ Hero Content */}
      <div className="container">
        <div className={styles.hero_section_container}>
          <motion.div
            className={styles.hero_content}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>
              Hello, I'm <span className={styles.name}>Aneeq Ahmed</span>
            </h1>
            <p>
              I'm a full-stack developer specializing in React.js & Node.js,
              focused on building fast, accessible, responsive, and visually
              engaging digital experiences. Even after more than a year of
              working with web technologies, my passion for creating modern web
              applications still feels as fresh as day one.
            </p>

            <div className={styles.hero_av}>
              <p className={styles.location}>
                <span className={styles.icon}>
                  <CiLocationOn />
                </span>{" "}
                Lahore, Pakistan
              </p>
              <p className={styles.location}>
                <span className={styles.icon1}>
                  <AiFillPlusCircle />
                </span>{" "}
                Available For New Projects
              </p>
            </div>

            <ul className={styles.icons}>
              <a
                href="https://www.instagram.com/codeaneeq"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagram}
              >
                <li>
                  <FaInstagram />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/codeaneeq/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedin}
              >
                <li>
                  <FaLinkedin />
                </li>
              </a>
              <a
                href="https://github.com/CodeAneeq"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.github}
              >
                <li>
                  <FaGithub />
                </li>
              </a>
            </ul>
          </motion.div>

          <motion.figure
            className={styles.hero_figure}
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

