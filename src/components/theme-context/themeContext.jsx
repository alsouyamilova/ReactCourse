import { useCallback, useState } from "react";
import { ThemeUserContext } from ".";

export const ThemeUserContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      if (current === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  }, []);

  const authUser = useCallback(() => {
    setUser((current) => {
      if (current === null) {
        return "user";
      } else {
        return null;
      }
    });
  }, []);

  return (
    <ThemeUserContext.Provider value={{ theme, toggleTheme, user, authUser }}>
      {children}
    </ThemeUserContext.Provider>
  );
};
