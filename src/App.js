import { useState } from 'react';

import './App.css';
import Form from './components/Form';
import List from './components/List';
import ModalWindow from './components/ModalWindow';

function App() {
    const [usersData, setUsersData] = useState([
        { name: 'Dmytro', age: 36, id: 't3' },
        { name: 'Tetiana', age: 29, id: 't4' },
        { name: 'Emilia', age: 3, id: 't5' },
    ]);

    const [modalWindow, setModalWindow] = useState(true);
    const [message, setMessage] = useState('');

    const addUserHandler = (user) => {
        setUsersData((prevUserList) => {
            return [...prevUserList, user];
        });
    };

    const deleteUserHandler = (id) => {
        const newUsersData = usersData.filter((item) => {
            return item.id !== id;
        });
        setUsersData(newUsersData);
    };

    const createMessageError = (message) => {
        return setMessage(message);
    };

    return (
        <div className="App">
            <>
                {!modalWindow && (
                    <ModalWindow
                        setModalWindow={setModalWindow}
                        title={message.title}
                        message={message.message}
                    />
                )}

                <Form
                    addUserHandler={addUserHandler}
                    setModalWindow={setModalWindow}
                    fn={createMessageError}
                />
                <List users={usersData} deleteUserHandler={deleteUserHandler} />
            </>
        </div>
    );
}

export default App;
