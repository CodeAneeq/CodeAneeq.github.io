import React, { useContext } from "react";
import styles from "./navbar.module.scss";
import logo from '../../assets/img/logo.png'
import darkLogo from '../../assets/img/logoDark.png'
import SidebarContext from "../../context/sidebar-context";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
// import { useMode } from "../../context/mode-context";
import MainBtn from "../btns/mainBtn";

const Navbar = () => {
  const {openSidebar} = useContext(SidebarContext);
  const navigate = useNavigate();
  // const { isDark, toggleMode } = useMode();

  return (
    <div className="container">
      <div className={`${styles.navbar_container}`}>
        <figure>
          <img src={darkLogo} alt="" onClick={() => navigate("/")}/>
        </figure>

        <div className={styles.hamburger} onClick={openSidebar}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <ul className={`${styles.list_container}`}>

        <NavLink to='/' className={ ({isActive}) => isActive ? 'activeNav nav' : 'nav' }>
          <li>Home</li>
         </NavLink>
        <NavLink to='/projects' className={ ({isActive}) => isActive ? 'activeNav nav' : 'nav' }>
          <li>Projects</li>
         </NavLink>
        <NavLink to='/services' className={ ({isActive}) => isActive ? 'activeNav nav' : 'nav' }>
          <li>Services</li>
         </NavLink>
        <NavLink to='/about-me' className={ ({isActive}) => isActive ? 'activeNav nav' : 'nav' }>
          <li>About</li>
         </NavLink>
        <NavLink to='/contact' className={ ({isActive}) => isActive ? 'activeNav nav' : 'nav' }>
          <li>Contact</li>
         </NavLink>



          <div className={`${styles.btn_div}`}>
         {/* <div onClick={toggleMode}>
          {isDark ? <span className={`${styles.moon}`}><FaMoon /></span> : <span><FaSun/></span>}
          
         </div> */}
         <div className={`${styles.btn}`}>

            <a href="Aneeq-Cv.pdf" download>
            <MainBtn>Download CV</MainBtn>
            </a>
         </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;