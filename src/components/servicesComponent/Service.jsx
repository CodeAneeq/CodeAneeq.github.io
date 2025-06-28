import React from 'react'
import styles from './service.module.scss'

const Service = (props) => {
  return (
    <div className='container'>
        <div className={`${styles.service_card_container}`}>
            <div className={`${styles.icon_box}`}><span>{props.icon}</span></div>
            <h2>{props.service}</h2>
            <p>{props.serDesc}</p>
        </div>
    </div>
  )
}

export default Service