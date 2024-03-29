import { useState, useEffect } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { Unstable_TrapFocus } from "@material-ui/core";


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
    toggleTodo: async (todoId, completed) => {
      try {
        const response = await axios.put(`http://localhost:5000/todos/completed/${todoId}`, {completed: !completed})
        const updatedTodos = todos.map((todo) =>
        todo.todo_id === todoId ? { ...todo, todo_id: todoId, completed: !todo.completed  } : todo
      );
      setTodos(updatedTodos);
      } catch (error) {
        console.error(error);
      }
      
      
    },
    editTodo: async (todoId, newTask) => {
      try {
        const response = await axios.put(`http://localhost:5000/todos/${todoId}`, {description: newTask})
        const updatedTodos = todos.map((todo) =>
        todo.todo_id === todoId ? {...todo, todo_id: todoId, description: newTask,  } : todo);
        setTodos(updatedTodos);
      } catch (error) {
        console.error(error);
      }
      
    },
  };
};
