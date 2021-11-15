import Todo from "./Todo";
import "./Todos.css";

function Todos({ todos, toggleComplete, handleRemove }) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
}

export default Todos;
