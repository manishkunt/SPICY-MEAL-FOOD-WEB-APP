import { createContext, useContext, useState } from "react";

// Create a context for dark mode
const DarkModeContext = createContext();

// Custom hook to use the dark mode context
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

// Provider component that wraps the entire app
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>{" "}
      {/* Apply dark class to the entire app */}
    </DarkModeContext.Provider>
  );
};
