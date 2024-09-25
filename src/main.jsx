import { createRoot } from "react-dom/client";
const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
import { App } from "./components/app/App";
root.render(
  <App title={"Restaurants"}/>
);
