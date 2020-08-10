import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";

const TodoApp = () => {
  const intialTodos = [
    { id: 1, task: "Wash Car", completed: true },
    { id: 2, task: "Walk dog", completed: true },
    { id: 3, task: "Wash House", completed: false },
  ];
  const [todos, setTodos] = useState(intialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <Appbar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with hooks</Typography>
        </Toolbar>
      </Appbar>
      <TodoList todos={todos} />
    </Paper>
  );
};

export default TodoApp;
