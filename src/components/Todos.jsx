import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-auto">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-4">Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border-b py-2 bg-teal-500 hover:bg-teal-700 text-white px-5 my-3"
            >
              <span>{todo.text}</span>
              <button
                className="text-red-600 hover:text-red-800 font-bold"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
