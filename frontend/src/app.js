import { createRoot } from "react-dom/client";

import RecsApp from "./RecsApp";

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("application"));
  root.render(<RecsApp />);
});
