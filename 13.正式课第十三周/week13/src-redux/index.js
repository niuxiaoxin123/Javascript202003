import React from "react";
import ReactDOM from "react-dom";
import Count from "./components/count";
import Todo from "./components/todo"
ReactDOM.render(<div>
    <Count></Count>
    <Todo></Todo>
</div>,document.querySelector("#root"));
