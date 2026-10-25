import { createContext, useState } from 'react';

export const UserStore = createContext();

export const contextProvider = ({ children }) => {
  const [user, setuser] = useState(second)
  return <UserStore.Provider>{children}</UserStore.Provider>;
};
