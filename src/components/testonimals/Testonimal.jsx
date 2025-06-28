import React from 'react'
import unkwon from '../../assets/img/unkwon.svg'
import styles from './testonimals.module.scss'

const Testonimal = (props) => {
  return (
    <div className={`${styles.testonimal_container}`}>
        <figure className={`${styles.pic}`}>
            <img src={props.pic} alt="" />
        </figure>
        <div className={`${styles.content_test}`}>
            <p>{props.testonimalPara}</p>
            <p className={`${styles.person}`}>{props.person}</p>
            <p className={`${styles.prof}`}>{props.profession}</p>
        </div>
    </div>
  )
}

export default Testonimal