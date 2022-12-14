import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import TodoList from "./todoComponent/TodoList";
import CreateTodo from "./todoComponent/CreateTodo";
import useFetch from "./util/useFetch";
import SideCalendar from "./component/SideCalender";

function App() {
  const [todos] = useFetch("http://localhost:3001/todoList/");

  return (
    <BrowserRouter>
      <div className="todoContainer">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<TodoList todos={todos} />} />
            <Route path="/create" element={<CreateTodo />} />
            <Route path="/calendar" element={<SideCalendar />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
