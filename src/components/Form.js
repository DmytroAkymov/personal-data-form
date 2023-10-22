import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.css';
import Button from './UI/Button';

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
        if (addName.trim() === '') {
            return props.setModalWindow(false);
        }
        if (addAge.trim() === '' || addAge <= 0) {
            return props.setModalWindow(false);
        }
        props.addUserHandler({ name: addName, age: addAge, id: uuidv4() });
        setAddName('');
        setAddAge('');
    };

    return (
        <form className={styles['user-form']} onSubmit={handleFormSubmit}>
            <h1>Enter user details:</h1>
            <div className={styles['form-input']}>
                <label htmlFor="name" className={styles['input-label']}>
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    className={styles['name-input']}
                    value={addName}
                    onChange={handleNameChange}
                />
            </div>
            <div className={styles['form-input']}>
                <label htmlFor="age" className={styles['input-label']}>
                    Age:
                </label>
                <input
                    type="number"
                    id="age"
                    className={styles['age-input']}
                    value={addAge}
                    onChange={handleAgeChange}
                />
            </div>
            <Button type="submit" />
        </form>
    );
};

export default Form;
