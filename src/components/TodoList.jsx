/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

const TodoList = ({ todos }) => {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};
export default TodoList;
