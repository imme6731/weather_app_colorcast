import { styled } from "styled-components";

export const Section01 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const Air = styled.div`
  width: 48%;
  height: 80px;
  padding: 0 20px;
  background-color: rgba(256, 256, 256, 0.4);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.div`
  font-size: 46px;
  color: #707070;
  margin-right: 20px;
`;
export const TxtBox = styled.div`
  text-align: center;
  & p {
    font-size: 16px;
    color: #707070;
    margin-bottom: 10px;
  }
  & h3 {
    font-size: 20px;
    color: #343434;
  }
`;
export const Wind = styled.div`
  width: 48%;
  height: 80px;
  background-color: rgba(256, 256, 256, 0.4);
  border-radius: 15px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Direction = styled.div`
  text-align: center;
  & p {
    font-size: 16px;
    color: #707070;
    margin-bottom: 10px;
  }
  & h3 {
    font-size: 20px;
    color: #343434;
  }
`;

export const Speed = styled.div`
  text-align: center;
  & p {
    font-size: 16px;
    color: #707070;
    margin-bottom: 10px;
  }
  & h3 {
    font-size: 20px;
    color: #343434;
  }
  & span {
    font-size: 16px;
  }
`;
