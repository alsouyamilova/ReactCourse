"use client";

import { ThemeContextProvider } from "../../../components/theme-context/themeContext";
import { UserContextProvider } from "../../../components/user-context/userContext";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
export default function Restaurant({children}) {

  return (
      <Provider store={store}>
        <UserContextProvider>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </UserContextProvider>
      </Provider>
  );
}
