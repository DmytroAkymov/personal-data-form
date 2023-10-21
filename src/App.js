import { useState } from 'react';

import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
    const [usersData, setUsersData] = useState([
        { name: 'Dmytro', age: 36, id: 't3' },
        { name: 'Tetiana', age: 29, id: 't4' },
        { name: 'Emilia', age: 3, id: 't5' },
    ]);

    const addUserHandler = (user) => {
        setUsersData([...usersData, user]);
    };

    const deleteUserHandler = (id) => {
        const newUsersData = usersData.filter((item) => {
            return item.id !== id;
        });
        setUsersData(newUsersData);
    };
    return (
        <div className="App">
            <Form addUserHandler={addUserHandler} />
            <List users={usersData} deleteUserHandler={deleteUserHandler} />
        </div>
    );
}

export default App;
