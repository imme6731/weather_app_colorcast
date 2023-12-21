import { styled } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  padding: 30px 15px;
`;
export const SMain = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Location = styled.h3`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 25px;
  line-height: 1.2;
  text-align: center;
  word-break: keep-all;
`;
export const Sky = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
`;
export const SkyIcon = styled.img`
  width: 80px;
  margin-bottom: 40px;
  filter: drop-shadow(3px 3px 3px #979797);
`;
export const Temp = styled.h3`
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 25px;
`;
export const TempUpDown = styled.div`
  display: flex;
  & p {
    font-size: 20px;
    font-weight: 400;
  }
`;
export const UpTemp = styled.p`
  margin-right: 15px;
`;
export const DownTemp = styled.p``;
