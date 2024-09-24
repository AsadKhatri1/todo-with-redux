import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todos/todoSlice";

const EditTodo = ({ todo, onUpdateComplete }) => {
  const [input, setInput] = useState(todo.text);
  const dispatch = useDispatch();

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo.id, text: input }));
    setInput("");
    onUpdateComplete(); // Notify the parent to reset editing state
  };

  return (
    <form onSubmit={updateTodoHandler} className="flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="mr-2 text-black"
      />
      <button type="submit" className="bg-teal-500 text-white p-1 rounded">
        Update
      </button>
    </form>
  );
};

export default EditTodo;
