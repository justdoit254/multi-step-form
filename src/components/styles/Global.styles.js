import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Ubuntu', sans-serif;
}

`;
export default GlobalStyles;
