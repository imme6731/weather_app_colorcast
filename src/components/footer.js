import { styled } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  padding: 40px 15px;
  border-top: 0.5px solid white;
`;
const InnerWrap = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CopyRight = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;
const License = styled.div`
  font-size: 14px;
`;

export const Footer = () => {
  return (
    <Wrap>
      <InnerWrap>
        <CopyRight>&copy; 2023 ColorCast</CopyRight>
        <License>출처 : 기상청, 한국환경공단</License>
      </InnerWrap>
    </Wrap>
  );
};
