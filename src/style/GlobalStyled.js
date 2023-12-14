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
    overflow-x: hidden;
    overflow-y: scroll;

  
    & #root{
        background-color: lightpink;
    }
}

ul, li{
    list-style: none;
}

a{
    text-decoration: none;
    color: white;
}
`;
// const skyBgVal = () => {
//   if (rain === "0") {
//     if (sky === "1") {
//       return "#ECBDBB";
//     } else if (sky === "3") {
//       return "#EBC7E8";
//     } else if (sky === "4") {
//       return "#BFACE0";
//     }
//   } else if (rain !== "0") {
//     if (rain === "1" || rain === "2" || rain === "5" || rain === "6") {
//       return "#A084CA";
//     } else if (rain === "3" || rain === "7") {
//       return "#8D72E1";
//     }
//   }
// };
