import { useState } from "react";
import "./FormTodos.css";
import { v4 as uuidv4 } from "uuid";

function FormTodos({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.task) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <div className="formTodos__container">
      <form onSubmit={handleSubmit} className="formTodos__firstSection">
        <input type="text" value={todo.task} onChange={handleTaskInputChange} />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}

export default FormTodos;
