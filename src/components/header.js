import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { headerStyle } from '../styles';
import { Link } from 'gatsby';
import { useTheme } from 'emotion-theming';
import { FaArrowDown, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa/';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.navBar};
  min-width: 100vw;
  border: 1px solid red;
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  ul {
    svg {
      margin-right: 1rem;
      color: #fff;
    }
  }
`;

const ButtonScroll = styled.button`
  background: #709425;
  border: 0;
  border-radius: 50%;
  font-size: 36px;
  padding: 10px 20px;
  cursor: pointer;
  width: 80px;
  height: 80px;

  &:focus {
    outline-style: none;
    background: #709425;
  }

  > svg {
    position: relative;
    top: 5px;
    fill: #fff;
    stroke-width: 40;
    stroke: #fff;
    animation-duration: 1.2s;
    animation-name: buttonIconMove;
    animation-iteration-count: infinite;
  }

  @keyframes buttonIconMove {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const Header = props => {
  const theme = useTheme();
  console.log(theme);
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_gdg.jpg" }) {
        childImageSharp {
          fixed(width: 85, height: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <header
      css={css`
        ${headerStyle}
      `}
    >
      <Nav>
        <Img fixed={data.file.childImageSharp.fixed} />
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Chi Siamo</NavLink>
          <NavLink to="/">Eventi</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/">
            <FaTwitter />
          </NavLink>
          <NavLink to="/">
            <FaYoutube />
          </NavLink>
          <NavLink to="/">
            <FaFacebook />
          </NavLink>
        </ul>
      </Nav>
      <section className="hero">
        <div className="banner">
          <h1>
            <span>We are a community, in Rome.</span>
          </h1>
          <h2>
            <span>
              We are <strong>GDG Roma</strong>!!!
            </span>
          </h2>
          <h3>
            <span>What are you waiting for? Join us!</span>
          </h3>
        </div>

        <ButtonScroll onClick={props.scrollTo} aria-label="scroll">
          <FaArrowDown />
        </ButtonScroll>
      </section>
    </header>
  );
};

export default Header;
