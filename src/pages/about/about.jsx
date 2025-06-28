import React from 'react'
import BasicLayout from '../../components/layout/basicLayout'
import AboutMe from '../../components/aboutme/AboutMe'
import styles from './aboutPage.module.scss'
import { motion } from "framer-motion"; // Import motion from framer-motion


const About = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <BasicLayout>
      <div  className={`${styles.about_me}`}>

      <div className='container'>
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} initial="hidden"
            whileInView="visible">
          <AboutMe/>
        </motion.div>
      </div>
      </div>
    </BasicLayout>
  )
}

export default About