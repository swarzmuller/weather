import { injectGlobal } from "@emotion/css";
import { Global, css } from "@emotion/react";

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    outline: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 1rem;
    font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-width: 1700px;
    padding: 0 16px;
    height: 100vh;
    margin: 0 auto;
  }
`;

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          background: linear-gradient(180deg, #bce8ff 0%, #ffffff 41.26%)
            no-repeat;
        }
      `}
    />
  );
};
