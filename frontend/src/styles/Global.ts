import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.text};
  font-family: 'League Spartan', sans-serif;
}

img,
picture {
  max-width: 100%;
  display: block;
}



`;
