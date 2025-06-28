import React from 'react'
import styles from './cards.module.scss'

const SkillCard = (props) => {
  return (
    <div className={`${styles.skill_card_container}`}>
        <figure>
            <img src={props.img} alt="" />
        </figure>
        <p>{props.name}</p>
    </div>
  )
}

export default SkillCard