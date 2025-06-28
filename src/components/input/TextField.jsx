import React from 'react';
import styles from './input.module.scss'; // Adjust the path as necessary

const TextField = ({ placeholder, value, onChange }) => {
    return (
        <textarea
            className={styles.project_input}
            placeholder={placeholder}
            rows={5} // This can be adjusted based on your design
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default TextField;