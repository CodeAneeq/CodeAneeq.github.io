import React from 'react'
import styles from './error.module.scss'
import { NavLink } from 'react-router-dom'
import BasicLayout from '../../components/layout/basicLayout'
import PrimaryBtn from '../../components/btns/primaryBtn'
import MainBtn from '../../components/btns/mainBtn'

const NotFoundPage = () => {
  return (
    <BasicLayout>
    <div className={`${styles.error_page_container} container`}>
      <p><span className='text-secondary'>Home / </span><span>404 Error</span></p>
      <div className={`${styles.main_content}`}>
      <h1>404 Not Found</h1>
      <p>You Visited page not found. You May Go Home page</p>
      <div className={`${styles.btn_div}`}>
      <NavLink to='/'><MainBtn type="submit">Back To Home Page</MainBtn></NavLink>
      </div>
      </div>
    </div>
    </BasicLayout>
  )
}

export default NotFoundPage;