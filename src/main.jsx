import { createRoot } from "react-dom/client";
const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
import { App } from "./components/app/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
