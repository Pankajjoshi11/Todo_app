import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, completeTodoThunk } from '../redux/thunk';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (todo._id) {
      dispatch(deleteTodo(todo._id));
    } else {
      console.error('Todo ID is undefined');
    }
  };

  const handleEdit = () => {
    const newTitle = prompt('Edit title:', todo.title);
    const newDescription = prompt('Edit description:', todo.description);
    if (newTitle && newDescription) {
      dispatch(editTodo({
        id: todo._id,
        title: newTitle,
        description: newDescription,
      }));
    }
  };

  const handleComplete = () => {
    if (todo._id) {
      dispatch(completeTodoThunk(todo._id));
    } else {
      console.error('Todo ID is undefined');
    }
  };

  return (
    <div className="bg-gray-600 shadow-md p-4 md:p-8 flex flex-col md:flex-row items-center my-2 mx-4 md:mx-40">
      <div className="flex-grow md:mr-4">
        <h3 className="text-orange-500 text-2xl md:text-3xl font-bold mb-2">{todo.title}</h3>
        <p className="text-white text-base">{todo.description}</p>
      </div>
      <div className="flex justify-center items-center mt-4 md:mt-0 space-x-2 md:space-x-4">
        <button
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete
        </button>
        <button
          onClick={handleComplete}
          className={`${
            todo.completed ? 'bg-green-500' : 'bg-gray-500 hover:bg-green-700'
          } text-white font-bold py-2 px-4 rounded-full`}
          disabled={todo.completed}
        >
          {todo.completed ? 'Completed' : 'Mark as Completed'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
