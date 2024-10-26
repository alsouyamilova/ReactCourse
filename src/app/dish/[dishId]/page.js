"use client";
import { Provider } from "react-redux";
import { UserContextProvider } from "../../../components/user-context/userContext";
import { store } from "../../../redux/store";
import { ThemeContextProvider } from "../../../components/theme-context/themeContext";

export default function Dishpage({children}) {
 
  return (
    <Provider store={store}>
      <UserContextProvider>
      <ThemeContextProvider>
      {children}
      </ThemeContextProvider>
      </UserContextProvider>{" "}
    </Provider>
  );
}
