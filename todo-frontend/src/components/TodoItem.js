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
    <div className="bg-gray-600 shadow-md px-4 py-6 md:px-8 md:py-8 flex flex-col md:flex-row items-center my-2 mx-40">
      <div className="md:mr-4 md:w-2/3">
        <h3 className="text-orange-500 text-3xl font-bold mb-2">{todo.title}</h3>
        <p className="text-white text-base">{todo.description}</p>
      </div>
      <div className="flex justify-center items-center mt-4 md:mt-0 md:w-1/3">
        <button
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 md:mr-0 md:ml-2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2 md:mr-0 md:ml-2"
        >
          Delete
        </button>
        <button
          onClick={handleComplete}
          className={`${
            todo.completed ? 'bg-green-500' : 'bg-gray-500 hover:bg-green-700'
          } text-white font-bold py-2 px-4 rounded-full md:mr-0 md:ml-2`}
          disabled={todo.completed}
        >
          {todo.completed ? 'Completed' : 'Mark as Completed'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
