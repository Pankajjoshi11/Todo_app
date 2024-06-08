import axios from 'axios';
import { setTodos, addTodo, removeTodo, updateTodo, completeTodo } from './todoSlice';

const API_URL = 'https://todo-app-lac-xi.vercel.app/api/todos';

export const fetchTodos = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  dispatch(setTodos(response.data));
};

export const createTodo = (todo) => async (dispatch) => {
  const response = await axios.post(API_URL, todo);
  dispatch(addTodo(response.data));
};

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch(removeTodo(id));
};

export const editTodo = (todo) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/${todo.id}`, todo);
  dispatch(updateTodo(response.data));
};

export const completeTodoThunk = (id) => async (dispatch) => {
  const response = await axios.patch(`${API_URL}/${id}/completed`);
  dispatch(completeTodo(id));
};
