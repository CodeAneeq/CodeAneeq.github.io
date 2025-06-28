import React from 'react'
import styles from './cards.module.scss'
import img from '../../assets/img/Wingie.webp'
import CategoryName from '../category/CategoryName'
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = (props) => {
  return (
    <div className={`${styles.project_card_container}`}>
        <div className={`${styles.project_content}`}>
          <div className='container'>

            <h2>{props.projectName}</h2>
            <p className={`${styles.project_para}`}>{props.projectDesc}</p>
            <div className={`${styles.project_languages}`}>
              {props.language.map((lang , i) => (
                <CategoryName category={lang} key={i}/>
              ))}
            </div>

            <div className={`${styles.link}`}>
            <a href={props.url} target='_blank' >
              <FiExternalLink/>
            </a>

            </div>
          </div>
        </div>
        <figure className={`${styles.project_figure}`}>
            <img src={props.img} />
        </figure>
    </div>
  )
}

export default ProjectCard