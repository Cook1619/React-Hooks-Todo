import React from "react";
import useInputState from "../CustomHooks/UseInputState";
import TextField from "@material-ui/core/TextField";

export default function EditTodo({ id, task, editTodo, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
