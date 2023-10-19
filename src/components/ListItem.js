import React from 'react';
import styles from './ListItem.module.css';
import { TiDeleteOutline } from 'react-icons/ti';

const ListItem = (props) => {
    return props.users.map((item) => {
        return (
            <li className={styles['list-item']}>
                {`${item.name} - ${item.age} years old`}
                <TiDeleteOutline />
            </li>
        );
    });
};

export default ListItem;
