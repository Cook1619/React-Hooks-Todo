import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import TodoApp from "./TodoApp";

afterEach(cleanup);

test("it should take a snapshot", () => {
  const { asFragment } = render(<TodoApp />);
  expect(asFragment(<TodoApp />)).toMatchSnapshot();
});

describe("TodoApp", () => {
  test("renders the TodoApp component", () => {
    render(<TodoApp />);
    screen.getByText("LIST WITH HOOKS");
  });
});
