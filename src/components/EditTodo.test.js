import React from "react";
import { render, screen } from "@testing-library/react";
import EditTodo from "./EditTodo";

const providerProps = {
    actions: jest.fn(),
}

describe('<EditTodo />', () => {
    it('should render the EditTodo component',  () => {
        EditTodo(<actions providerProps={providerProps} />)
        screen.debug();
    })
})