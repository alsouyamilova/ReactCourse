"use client"
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "../../components/theme-context/themeContext";
import { UserContextProvider } from "../../components/user-context/userContext";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
export default function Restaurants({children}) {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  </BrowserRouter>
  )
}
