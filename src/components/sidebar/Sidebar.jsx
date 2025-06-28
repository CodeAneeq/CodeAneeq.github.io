import React, { useContext } from "react";
import styles from './sidebar.module.scss';
import { RxCross1 } from "react-icons/rx";
import darkLogo from '../../assets/img/logoDark.png'

import SidebarContext from "../../context/sidebar-context";
import PrimaryBtn from "../btns/primaryBtn";
import { NavLink } from "react-router-dom";
import logo from '../../assets/img/logo.png'
import { useMode } from "../../context/mode-context";
import { FaMoon, FaSun } from "react-icons/fa";


const Sidebar = () => {
  const { is_sidebar, closeSidebar } = useContext(SidebarContext);
   const { isDark, toggleMode } = useMode();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`${styles.sidebar_container} ${
          is_sidebar ? styles.active : styles.hidden
        }`}
      >
        {/* <div className={`${styles.div}`}> */}

        <figure>
            {/* <p>CODEANEEQ</p> */}
            <img src={isDark ? darkLogo : logo} alt="" />
        </figure>
        <span className={styles.close_sidebar_icon} onClick={closeSidebar}>
          <RxCross1 />
        </span>
        <hr />
        {/* </div> */}
        <div className={styles.sidebar_content_container}>
          <div className={styles.nav_link_container}>
            <ul>
            <NavLink to='/' className={`${styles.li}`}>
          <li>HOME</li>
         </NavLink>
        <NavLink to='/projects' className={`${styles.li}`}>
          <li>Projects</li>
         </NavLink>
        <NavLink to='/services' className={`${styles.li}`}>
          <li>Services</li>
         </NavLink>
        <NavLink to='/about-me' className={`${styles.li}`}>
          <li>About</li>
         </NavLink>
        <NavLink to='/contact' className={`${styles.li}`}>
          <li>Contact</li>
         </NavLink>
            </ul>
          </div>
          <hr />
          {/* <div className={`${styles.div}`}> */}

          {/* <div className={`${styles.btn_Div}`}>

          <PrimaryBtn>Download CV</PrimaryBtn>
          </div> */}
          <div className={`${styles.btn_div}`}>
         <div onClick={toggleMode}>
          {isDark ? <span><FaMoon style={{color: 'white'}}/></span> : <span><FaSun/></span>}
          
         </div>
         <div className={`${styles.btn}`}>

            <a href="Aneeq-Cv.pdf" download>
            <PrimaryBtn>Download CV</PrimaryBtn>
            </a>
         </div>
          </div>
          {/* </div> */}
        </div>
      </aside>

    </>
  );
};

export default Sidebar;
