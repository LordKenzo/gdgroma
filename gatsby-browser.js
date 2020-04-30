import React from 'react';
import ThemeProvider from './src/context/ThemeProvider';

// API di Gatsby - element è il nostro sito
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
