import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/thunk';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <div className='bg-gray-600 items-center flex justify-center mx-60 my-4'>
         <form 
        onSubmit={handleSubmit}
        className=' m-4 p-4 flex'>
        <div className='flex flex-col relative p-4 '>
          <h1 className='text-xl p-2 text-white font-semibold'>Name</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className='border border-yellow-500 w-60 relative h-10 rounded-md p-2'
          />
        </div>
        <div className='flex flex-col relative p-4 '>
          <h1 className='text-xl p-2 text-white font-semibold'>Description</h1>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
            className='border border-yellow-500 w-60 h-10 rounded-md p-2'
          />
        </div>
        <button 
          type="submit"
          className='border bg-orange-500 hover:bg-orange-400 m-4 my-10 p-4 rounded-full justify-between text-white font-semibold text-lg'>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
