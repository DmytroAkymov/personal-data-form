import React from 'react';
import styles from './ListItem.module.css';
import { TiDeleteOutline } from 'react-icons/ti';

const ListItem = (props) => {
    return props.users.map((item, index) => {
        return (
            <li className={styles['list-item']} key={index}>
                {`${item.name} - ${item.age} years old`}
                <TiDeleteOutline
                    onClick={() => {
                        props.deleteUserHandler(item.id);
                    }}
                />
            </li>
        );
    });
};

export default ListItem;
