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
        <div className="bg-gray-600 mx-60 shadow-md px-8 pt-6 pb-8 flex items-center my-2  bg-gray-600">
          <div className='flex-col'>
            <h3 className="text-orange-500 text-3xl font-bold mb-2">{todo.title}</h3>
            <p className="text-white text-base">{todo.description}</p>
            </div>
          <div className="mt-4 justify-between px-10">
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2"
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
