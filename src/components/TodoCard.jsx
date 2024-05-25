import { useContext } from "react";
import { ListContext } from "../App";

// eslint-disable-next-line react/prop-types
const TodoCard = ({ children, todoIndex }) => {
  const { handleDeleteButton, handleEditButton } = useContext(ListContext);

  return (
    <li className="todoItem">
      {children}

      <div className="actionsContainer">
        <button onClick={() => handleEditButton(todoIndex)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={() => handleDeleteButton(todoIndex)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};
export default TodoCard;
