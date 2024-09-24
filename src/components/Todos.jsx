import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";
import EditTodo from "./EditTodo";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleUpdateComplete = () => {
    setEditingTodoId(null); // Reset the editing state
  };

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
              {editingTodoId === todo.id ? (
                <EditTodo todo={todo} onUpdateComplete={handleUpdateComplete} />
              ) : (
                <>
                  <span>{todo.text}</span>
                  <div>
                    <button
                      className="text-red-600 hover:text-red-800 font-bold mx-2"
                      onClick={() => dispatch(removeTodo(todo.id))}
                    >
                      X
                    </button>
                    <button
                      className="text-yellow-600 hover:text-yellow-800 font-bold"
                      onClick={() => setEditingTodoId(todo.id)}
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
