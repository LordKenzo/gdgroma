import React from 'react';
import { Global } from '@emotion/core';
import { global, theme } from '../styles';
import { ThemeProvider } from 'emotion-theming';

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <Global styles={global(theme)} />
      <div css={(theme) => ({ color: theme.colors.primary })}>
        some other text
      </div>
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
