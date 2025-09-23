import React from 'react'
import styles from './cards.module.scss'
import CategoryName from '../category/CategoryName'
import { FiExternalLink } from "react-icons/fi";
import { FiPlay } from "react-icons/fi"; // Play icon for demo button

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

            <div className={`${styles.link_buttons}`}>
              {/* Original External Link */}
              <a href={props.url} target='_blank' className={`${styles.icon_link}`}>
                <FiExternalLink/>
              </a>

              {/* Watch Demo Button */}
              {
                props.isDemo ? <a href={props.demoURL} target='_blank' className={`${styles.watch_demo_btn}`}>
                <FiPlay style={{ marginRight: '5px' }}/>
                Watch Demo
              </a> : <></>
              }
              
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
