import { createContext, useState } from 'react';

export const UserStore = createContext();

export const contextProvider = ({ children }) => {
  const [users, setusers] = useState(second)
  return <UserStore.Provider>{children}</UserStore.Provider>;
};
