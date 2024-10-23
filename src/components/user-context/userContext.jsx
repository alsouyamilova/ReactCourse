import { useCallback, useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const authUser = useCallback(() => {
    setUser((current) => {
      if (Object.values(current) == 0 ) {
        return { name: "username", id: "userid", isAuth: true };
      } else {
        return {isAuth: false};
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, authUser }}>
      {children}
    </UserContext.Provider>
  );
};
