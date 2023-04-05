import { createContext, useState } from "react";

export const AuthenticationUserContext = createContext();

export const AuthenticatedUserProvider = ({ children }) => {
  const [userA, setUserA] = useState("saurabh");
  return (
    <AuthenticationUserContext.Provider value={[userA, setUserA]}>
      {children}
    </AuthenticationUserContext.Provider>
  );
};
