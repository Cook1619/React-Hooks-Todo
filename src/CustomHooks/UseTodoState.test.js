import useTodoState from "./UseTodoState";
import { useState } from "react";

jest.mock("react");
const { addTodo, editTodo, removeTodo, toggleTodo } = useTodoState();

describe("useTodoState", () => {
  test("makes sure addtodo works", () => {
    const todos = [
      { id: "123abc", task: "This is a new todo", completed: true },
    ];
    const setTodos = jest.fn();
    useState.mockReturnValue([todos, setTodos]);
    addTodo();
    expect(setTodos).toHaveBeenCalled();
  });
});
