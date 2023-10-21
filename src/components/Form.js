import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.css';

const Form = (props) => {
    const [addName, setAddName] = useState('');
    const [addAge, setAddAge] = useState('');

    const handleNameChange = (event) => {
        setAddName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAddAge(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.addUserHandler({ name: addName, age: addAge, id: uuidv4() });
    };

    return (
        <form className={styles['user-form']} onSubmit={handleFormSubmit}>
            <h1>Enter user details:</h1>
            <div className={styles['form-input']}>
                <label className={styles['input-label']}>Name:</label>
                <input
                    type="text"
                    id="name"
                    className={styles['name-input']}
                    value={addName}
                    onChange={handleNameChange}
                />
            </div>
            <div className={styles['form-input']}>
                <label className={styles['input-label']}>Age:</label>
                <input
                    type="number"
                    id="age"
                    className={styles['age-input']}
                    value={addAge}
                    onChange={handleAgeChange}
                />
            </div>
            <button className={styles['btn-create-user']} type="submit">
                Create a user
            </button>
        </form>
    );
};

export default Form;
