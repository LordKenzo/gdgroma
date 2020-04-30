import React, { useState } from 'react';
import { theme } from '../styles';

export const ThemeContext = React.createContext([]);

const ThemeProvider = ({ children }) => {
  const [defaultTheme, setDefaultTheme] = useState(theme);

  return (
    <ThemeContext.Provider value={[defaultTheme, setDefaultTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
