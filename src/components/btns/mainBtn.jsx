import React from 'react';
import styles from './btns.module.scss';

const MainBtn = (props) => {
  return (
  <button  onClick={props.onClick}
      disabled={props.disabled} className={`${styles.btn}`}>{props.loading ? <><span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">  Loading...</span></> : props.children}</button>
  );
};

export default MainBtn;