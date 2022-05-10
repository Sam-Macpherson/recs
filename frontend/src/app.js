import ReactDOM from "react-dom";

import { setAxiosDefaults } from "./api";

import RecsApp from "./RecsApp";

document.addEventListener("DOMContentLoaded", () => {
  setAxiosDefaults();
  console.log("Here!");
  ReactDOM.render(<RecsApp />, document.getElementById("application"));
});
