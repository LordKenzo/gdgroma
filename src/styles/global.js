import { css } from '@emotion/core';
// prettier-ignore

export const global = theme => css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  /* Normalizing vertical spacing */
  * + * {
    margin-top: 1rem;
  }

  html,
  body {
    margin: 0;
    color: #222;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif;
    font-size: 18px;
    line-height: 1.4;

    /* Gatsby aggiunge un div */
    > div {
      margin-top: 0;
    }

    p {
      color: ${theme.colors.textPrimary};
      background-color: transparent;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.textPrimary};
      background-color: ${theme.colors.backPrimary};
      line-height: 1.1;

      /* Tutto quello che viene subito dopo l'heading */
      + * {
        margin-top: 0.5rem;
      }

      strong {
        color: #222;
      }
    }
  }
`;
