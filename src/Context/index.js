import React, { Component } from "react";

const TodoContext = React.createContext();

export const Provider = TodoContext.Provider;
export const Consumer = TodoContext.Consumer;

// export class Provider extends Component {
//   render() {
//     return;
//   }
// }

// export const Consumer = TodoContext.Consumer;
