import { createContext, useState, useContext, useEffect } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('dark') === 'true'
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('dark', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('dark')
    }
  }, [isDark]);

  const toggleMode = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
