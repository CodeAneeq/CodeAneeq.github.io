import React from 'react';
import styles from './input.module.scss'; 

const TextField = ({ placeholder, value, onChange }) => {
    return (
        <textarea
            className={styles.project_input}
            placeholder={placeholder}
            rows={5}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default TextField;