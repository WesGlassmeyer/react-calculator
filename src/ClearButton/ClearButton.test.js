import React from "react";
import ReactDOM from "react-dom";
import ClearButton from "./ClearButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ClearButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
