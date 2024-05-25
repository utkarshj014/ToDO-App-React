import { createContext, useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export const ListContext = createContext();

const App = () => {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddButton = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleDeleteButton = (Index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== Index);
    setTodos(newTodos);
  };
  const handleEditButton = (Index) => {
    setNewTodo(todos[Index]);
    handleDeleteButton(Index);
  };

  return (
    <>
      <TodoInput
        handleAddButton={handleAddButton}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <ListContext.Provider value={{ handleDeleteButton, handleEditButton }}>
        <TodoList todos={todos} />
      </ListContext.Provider>
    </>
  );
};
export default App;
