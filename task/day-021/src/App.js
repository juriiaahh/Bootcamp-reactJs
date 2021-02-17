import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App my-4">
     <TodoInput />
     <TodoList />
    </div>
  );
}

export default App;
