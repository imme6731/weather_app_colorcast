import { styled } from "styled-components";
import PNFImg from "../../assets/img/404error.png";
import { PageTitle } from "../../components/PageTitle";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h3 {
    font-size: 20px;
  }
`;
const Img = styled.img`
  width: 140px;
  margin-bottom: 30px;
`;
export const PageNotFound = () => {
  return (
    <>
      <PageTitle titlename={` | 404Error`} />
      <Wrap>
        <Img src={PNFImg} />
        <h3>현재 페이지를 찾을 수 없습니다.</h3>
      </Wrap>
    </>
  );
};
