import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}

body{
    max-width: 400px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}

ul, li{
    list-style: none;
}

a{
    text-decoration: none;
    color: white;
}
`;
