import React from 'react'
import styles from './btns.module.scss'

const PrimaryBtn = (props) => {
  return (
    // <div className={`${styles.btnDiv}`}>
    <button 
      onClick={props.onClick}
      disabled={props.disabled} className={`${styles.btn}`}>{props.loading ? <><span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">  Loading...</span></> : props.children}</button>
  // </div>
  )
}

export default PrimaryBtn