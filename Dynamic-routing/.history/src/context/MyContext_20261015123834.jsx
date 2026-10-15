import { createContext, useState } from 'react';

export const MyStore = createContext();

export const contextProvider = ({ children }) => {

    const [productsData, setProductsData] = useState([])
  return <MyStore.Provider>{children}</MyStore.Provider>;
};
