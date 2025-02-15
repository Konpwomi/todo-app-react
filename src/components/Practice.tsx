import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Practice = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider')
  }

  const { theme, toggleTheme} = themeContext;

  return (
    <div>
      <p className="mb-5">Current Theme: {theme}</p>
      <button onClick={toggleTheme} className="p-3 border bg-amber-500 rounded-2xl">Change!</button>
    </div>
  );
};

export default Practice;
