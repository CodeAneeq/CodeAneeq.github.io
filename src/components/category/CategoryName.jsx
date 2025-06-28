import React from 'react'
import styles from './category.module.scss'

const CategoryName = (props) => {
  return (
    <div className={`${styles.category_container}`}>
        <div className={`${styles.category_name_div}`}>
            <p>{props.category}</p>
        </div>
    </div>
  )
}

export default CategoryName