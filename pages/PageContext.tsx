import React, { createContext, useState } from 'react';

// Create a context
export const PageContext = createContext();

// Create a provider component
export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};