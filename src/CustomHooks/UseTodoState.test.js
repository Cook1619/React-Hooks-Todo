import useTodoState from "./UseTodoState";
import { useState } from "react";
import { useState } from "react";
import useTodoState from "./UseTodoState";

jest.mock("react");

describe("useTodoState", () => {
  test("makes sure addtodo works", () => {
    const todos = [
      { id: "123abc", task: "This is a new todo", completed: true },
    ];
    const setTodos = jest.fn();
    useState.mockReturnValue([todos, setTodos]);
    const { addTodo } = useTodoState();
    addTodo();
    expect(setTodos).toHaveBeenCalled();
  });
});
