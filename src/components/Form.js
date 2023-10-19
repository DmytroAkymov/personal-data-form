import React from 'react';
import styles from './Form.module.css';

const Form = () => {
    return (
        <div className={styles['user-form']}>
            <h1>Enter user details:</h1>
            <div className={styles['form-input']}>
                <labe className={styles['input-label']}>Name:</labe>
                <input type="text" id="name" className={styles['name-input']} />
            </div>
            <div className={styles['form-input']}>
                <labe className={styles['input-label']}>Age:</labe>
                <input type="number" id="age" className={styles['age-input']} />
            </div>
            <button className={styles['btn-create-user']} type="submit">
                Create a user
            </button>
        </div>
    );
};

export default Form;
