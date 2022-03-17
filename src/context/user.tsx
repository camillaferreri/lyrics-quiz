import React, { createContext, useState, useContext, useEffect } from "react"

interface User {
  username: string
} 

export interface UserContextType {
  user?: User | undefined;
  login: (username: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({ user: undefined });

export const UserProvider = ({ children }: {children: React.ReactNode}) => {
  const [ user, setUser ] = useState<User | undefined>(undefined);

  useEffect(() => {
    const username = localStorage.getItem("username")
    if (username) {
      setUser({username: username})
    }
  }, [])

  const login = (username: string) => {
    localStorage.setItem("username", username)
    setUser({username: username})
  }

  const logout = () => {
    localStorage.setItem("username", "")
    setUser(undefined)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  return useContext(UserContext);
};