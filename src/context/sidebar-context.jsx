import { createContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [is_sidebar, setIsSidebar] = useState(false);

  const openSidebar = () => setIsSidebar(true);
  const closeSidebar = () => setIsSidebar(false);

  return (
    <SidebarContext.Provider value={{ is_sidebar, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
