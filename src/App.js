import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import TodoList from './todoComponent/TodoList';
import CreateTodo from './todoComponent/CreateTodo';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3001/todoList')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setTodos(data);
      })
      .catch(err => {
        console.log(err);
      })
    
  }, [todos])

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<TodoList todos={todos}  />} />
            <Route path="/create" element={<CreateTodo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;