import { useEffect } from "react";
import { styled } from "styled-components";
import { getWeather } from "../../api";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const data = await getWeather();
        console.log(data);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, []);
  return <Wrap>Home</Wrap>;
};
