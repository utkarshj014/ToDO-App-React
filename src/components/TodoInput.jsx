// import { useState } from "react";

/* eslint-disable react/prop-types */
const TodoInput = ({ handleAddButton, newTodo, setNewTodo }) => {
  return (
    <header>
      <input
        placeholder="Enter ToDo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={() => {
          if (newTodo === "") {
            alert("Please enter some task!");
          } else {
            handleAddButton(newTodo);
            setNewTodo("");
          }
        }}
      >
        Add
      </button>
    </header>
  );
};
export default TodoInput;
