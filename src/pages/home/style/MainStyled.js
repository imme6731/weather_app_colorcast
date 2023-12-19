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
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.2;
  text-align: center;
  word-break: keep-all;
`;
export const Sky = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const SkyIcon = styled.img`
  width: 140px;
  margin-bottom: 30px;
`;
export const Temp = styled.h3`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 25px;
`;
export const TempUpDown = styled.div`
  display: flex;
  & p {
    font-size: 22px;
    font-weight: 400;
  }
`;
export const UpTemp = styled.p`
  margin-right: 15px;
`;
export const DownTemp = styled.p``;
