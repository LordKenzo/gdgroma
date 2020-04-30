import React, { useContext } from 'react';
import { Global } from '@emotion/core';
import { global, theme, oldTheme } from '../styles';
import { ThemeProvider } from 'emotion-theming';
import { ThemeContext } from '../context/ThemeProvider';

const Layout = ({ children }) => {
  const [defaultTheme, setDefaultTheme] = useContext(ThemeContext);

  const handleClick = () => {
    if (defaultTheme === theme) {
      setDefaultTheme(oldTheme);
    } else {
      setDefaultTheme(theme);
    }
  };
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Global styles={global(defaultTheme)} />
        <header>
          <button onClick={() => handleClick()}>Change</button>
        </header>

        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
