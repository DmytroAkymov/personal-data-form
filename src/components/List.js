import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.css';

const List = (props) => {
    return (
        <div className={styles['list-container']}>
            <h2>All users</h2>
            <ul>
                <ListItem users={props.users} />
            </ul>
        </div>
    );
};

export default List;
