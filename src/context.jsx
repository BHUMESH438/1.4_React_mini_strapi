import { createContext, useContext, useState } from 'react';

const Appcontext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return <Appcontext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}>{children}</Appcontext.Provider>;
};
export const globalContext = () => {
  return useContext(Appcontext);
};
