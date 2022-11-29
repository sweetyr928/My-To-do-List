import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import { useState } from 'react';
import TodoList from './todoComponent/TodoList';
import CreateTodo from './todoComponent/CreateTodo';
import todoList from './data/todoList';

function App() {
  const [todos, setTodos] = useState(todoList);
  console.log(todos)
  // 투두리스트 추가하기
  const create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // 투두리스트 삭제하기
  const remove = (id) => {
    console.log('id',id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 투두리스트 수정하기
  const update = (id, updtedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // 투두리스트 완료 => 체크 표시
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<TodoList todos={todos} toggleComplete={toggleComplete} update={update} remove={remove}/>} />
            <Route path="/create" element={<CreateTodo create={create} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;