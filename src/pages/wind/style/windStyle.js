import { styled } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  padding: 30px 15px;
`;
export const Main = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Location = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 25px;
  line-height: 1.2;
  text-align: center;
  word-break: keep-all;
`;
export const Date = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;
export const WindIcon = styled.div`
  font-size: 80px;
  color: #8db0f7;
  margin-bottom: 40px;
  filter: drop-shadow(3px 3px 3px #979797);
`;

export const ValWrap = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
export const MDirection = styled.h3`
  font-size: 32px;
  font-weight: 500;
`;
export const MSpeed = styled.h3`
  font-size: 32px;
  font-weight: 500;
  margin-left: 20px;
  & span {
    font-size: 20px;
  }
`;
export const Section01 = styled.div`
  width: 90%;
  background-color: rgba(256, 256, 256, 0.4);
  border-radius: 15px;
  padding: 0 20px;
  margin-bottom: 30px;
  margin: 0 auto;
`;
export const Title = styled.h3`
  padding: 20px 0;
  border-bottom: 0.5px solid #b4b4b4;
  font-size: 20px;
  color: #343434;
  font-weight: 500;
`;
export const ConWrap = styled.div`
  padding-bottom: 5px;
`;
export const Con = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;
export const Time = styled.p`
  font-size: 18px;
  color: #343434;
`;
export const Value = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.div`
  font-size: 20px;
  color: #8db0f7;
  filter: drop-shadow(1px 1px 1px #979797);
`;
export const Direction = styled.p`
  font-size: 18px;
  color: #343434;
  margin-left: 15px;
`;
export const Speed = styled.p`
  font-size: 18px;
  color: #343434;
  margin-left: 10px;
`;
