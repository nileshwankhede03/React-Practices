import { createContext, useState } from 'react';

export const MyStore = createContext();

export const contextProvider = ({ children }) => {

    const [productsData, setproductsData] = useState(second)
  return <MyStore.Provider>{children}</MyStore.Provider>;
};
