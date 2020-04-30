import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { headerStyle } from '../styles';
import { Link } from 'gatsby';
import { useTheme } from 'emotion-theming';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.backPrimary};
  min-width: 100vw;
  border: 1px solid red;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
`;

const Header = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <header
      css={css`
        ${headerStyle}
      `}
    >
      <Nav>
        <NavLink to="/">Home</NavLink>
      </Nav>
    </header>
  );
};

export default Header;
