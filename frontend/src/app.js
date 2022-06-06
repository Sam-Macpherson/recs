import { createRoot } from "react-dom/client";
import { setAxiosDefaults } from "./api";

import RecsApp from "./RecsApp";

document.addEventListener("DOMContentLoaded", () => {
  setAxiosDefaults();
  const root = createRoot(document.getElementById("application"));
  root.render(<RecsApp />);
});
