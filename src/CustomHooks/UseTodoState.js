import { useState, useEffect } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";


export default (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/todos");
      console.log(response.data);
      setTodos(response.data);
  
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return {
    todos,
    addTodo: async (newTodoText) => {
      try {
        const response = await axios.post("http://localhost:5000/todos", {description: newTodoText, completed: false});
        setTodos([
          ...todos,
          response.data
        ])
      } catch (error) {
        console.error(error.message)
      }
    },
    removeTodo: async (todoId) => {
      //filter out removed todo
      try {
        const response = await axios.delete(`http://localhost:5000/todos/${todoId}`);
        setTodos(todos.filter(todo => todo.todo_id !== todoId));
      } catch (error) {
        console.error(error);
      }
    },
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: async (todoId, newTask) => {
      try {
        const response = await axios.put(`http://localhost:5000/todos/${todoId}`, {description: newTask})
        console.log('TODOS', todos);
        console.log('new task')
        const updatedTodos = todos.map((todo) =>
        todo.todo_id === todoId ? { todo_id: todoId, description: newTask, ...todo } : todo);
        console.log('updated todos', updatedTodos);
        setTodos(updatedTodos);
      } catch (error) {
        console.error(error);
      }
      
    },
  };
};
