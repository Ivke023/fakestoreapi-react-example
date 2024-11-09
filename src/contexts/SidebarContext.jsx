import React, {useState, createContext} from 'react';

// create context
export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  }

  return (
    <SidebarContext.Provider value={{sidebarOpen,setSidebarOpen,handleSidebarClose}}>{children}</SidebarContext.Provider>
  )
}

export default SidebarProvider;