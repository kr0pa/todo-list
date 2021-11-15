import "./Todo.css";

function Todo({ todo, toggleComplete, handleRemove }) {
  const handleChecked = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    handleRemove(todo.id);
  };

  return (
    <div className="todo">
      <h4 style={{ textDecoration: todo.completed ? "line-through" : null }}>
        {todo.task}
      </h4>

      <div className="todo__buttons">
        <button onClick={handleRemoveClick}>usuń</button>
        <button onClick={handleChecked}>oznacz</button>
      </div>
    </div>
  );
}

export default Todo;
