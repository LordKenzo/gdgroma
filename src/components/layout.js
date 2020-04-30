import React, { useContext, useRef } from 'react';
import { Global, css } from '@emotion/core';
import { global, theme, oldTheme } from '../styles';
import { ThemeProvider } from 'emotion-theming';
import { ThemeContext } from '../context/ThemeProvider';
import Header from './header';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Layout = ({ children }) => {
  const [defaultTheme, setDefaultTheme] = useContext(ThemeContext);
  const myRef = useRef(null);

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
        <Header scrollTo={() => scrollToRef(myRef)} />

        <main
          styles={css`
            min-height: 2000px;
          `}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            et omnis magnam consequatur voluptatibus alias rerum blanditiis
            cupiditate? Tempora impedit iste quos minima molestias esse
            doloribus alias culpa voluptas explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            et omnis magnam consequatur voluptatibus alias rerum blanditiis
            cupiditate? Tempora impedit iste quos minima molestias esse
            doloribus alias culpa voluptas explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            et omnis magnam consequatur voluptatibus alias rerum blanditiis
            cupiditate? Tempora impedit iste quos minima molestias esse
            doloribus alias culpa voluptas explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            et omnis magnam consequatur voluptatibus alias rerum blanditiis
            cupiditate? Tempora impedit iste quos minima molestias esse
            doloribus alias culpa voluptas explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            et omnis magnam consequatur voluptatibus alias rerum blanditiis
            cupiditate? Tempora impedit iste quos minima molestias esse
            doloribus alias culpa voluptas explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            et omnis magnam consequatur voluptatibus alias rerum blanditiis
            cupiditate? Tempora impedit iste quos minima molestias esse
            doloribus alias culpa voluptas explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            et omnis magnam consequatur voluptatibus alias rerum blanditiis
            cupiditate? Tempora impedit iste quos minima molestias esse
            doloribus alias culpa voluptas explicabo.
          </p>
          <p ref={myRef}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            et omnis magnam consequatur voluptatibus alias rerum blanditiis
            cupiditate? Tempora impedit iste quos minima molestias esse
            doloribus alias culpa voluptas explicabo.
          </p>

          {children}
        </main>
        <footer>
          <button onClick={() => handleClick()}>Change</button>Copyright &copy;
          Lorenzo Franceschini
        </footer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
