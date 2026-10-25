import { createContext, useState } from 'react';

export const UserStore = createContext();

export const contextProvider = ({ children }) => {
  const [users, setusers] = useState([])
  return <UserStore.Provider>{children}</UserStore.Provider>;
};
