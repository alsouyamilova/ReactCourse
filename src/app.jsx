"use client";
import { ThemeContextProvider } from "./components/theme-context/themeContext";
import { UserContextProvider } from "./components/user-context/userContext";
import { Provider } from "react-redux";
import { store } from "./redux/store"

const App = ({children}) => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
