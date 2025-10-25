import React, { useEffect } from 'react'
import BasicLayout from '../../components/layout/basicLayout'
import AboutMe from '../../components/aboutme/AboutMe'
import styles from './aboutPage.module.scss'
import { motion } from "framer-motion"; 
import aneeq from '../../assets/img/About_img_page_light.png'
import aneeqDark from '../../assets/img/About_img_page.png'

const About = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    document.title = "About Us - CodeAneeq"
  }, [])

  return (
    <BasicLayout>
      <div  className={`${styles.about_me}`}>

      <div className='container'>
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} initial="hidden"
            whileInView="visible">
          <AboutMe aneeqDark={aneeqDark} />
        </motion.div>
      </div>
      </div>
    </BasicLayout>
  )
}

export default About