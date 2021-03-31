import React from "react";
import { render, screen } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("TodoApp", () => {
  test("<TodoApp/>", () => {
    render(<TodoApp />);
    expect(screen.getByText(/LIST WITH HOOKS/i)).toBeInTheDocument();
    expect(screen.getByText(/Add New Todo/)).toBeInTheDocument();
  });
});
