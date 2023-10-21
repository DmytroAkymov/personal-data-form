import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
    const [usersData, setUsersData] = useState([
        { name: 'Dmytro', age: 36 },
        { name: 'Tetiana', age: 29 },
        { name: 'Emilia', age: 3 },
    ]);

    const addUserHandler = (user) => {
        setUsersData([...usersData, user]);
    };

    return (
        <div className="App">
            <Form addUserHandler={addUserHandler} />
            <List users={usersData} />
        </div>
    );
}

export default App;
