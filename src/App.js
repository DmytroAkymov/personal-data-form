import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
    const USERS_DATA = [
        { name: 'Dmytro', age: 36, id: 't1' },
        { name: 'Tetiana', age: 29, id: 't2' },
        { name: 'Emilia', age: 0.3, id: 't3' },
    ];
    return (
        <div className="App">
            <Form />
            <List users={USERS_DATA} />
        </div>
    );
}

export default App;
