import { useCallback, useState } from "react";
import { UserContext} from ".";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);


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
    <UserContext.Provider value={{user, authUser }}>
      {children}
    </UserContext.Provider>
  );
};
