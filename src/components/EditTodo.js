import React from "react";
import useInputState from "../CustomHooks/UseInputState";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function EditTodo({ id, task, editTodo, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
      <Button
        variant="contained"
        color="secondary"
        style={{ margin: "1rem" }}
        onClick={(e) => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          toggle();
        }}
      >
        Save
      </Button>
    </>
  );
}
