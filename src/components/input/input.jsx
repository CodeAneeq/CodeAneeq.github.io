import React from 'react'
import styles from './input.module.scss'

const Input = (props) => {
  return (
    <div className={`${styles.input_container}`}>
        <span>{props.icon}</span>
        <input 
        type="text" 
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder= {props.placeholder} 
        className={`${styles.input} ${props.className}`} />
    </div>
  )
}

export default Input