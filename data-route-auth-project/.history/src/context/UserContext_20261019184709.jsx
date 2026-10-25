import { createContext, useState } from 'react';

export const UserStore = createContext();

export const contextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return <UserStore.Provider value={}>{children}</UserStore.Provider>;
};
