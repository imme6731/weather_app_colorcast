import { Button, Drawer, useDisclosure } from "@chakra-ui/react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { useRef } from "react";
import { Link } from "react-router-dom";
import LogoPic from "../assets/img/Logo.png";
import homePic from "../assets/img/home.png";
import humiPic from "../assets/img/humidity.png";
import airPic from "../assets/img/air.png";
import windPic from "../assets/img/wind.png";

const Wrap = styled.div`
  width: 100%;
  padding: 20px 15px;
`;
const Bar = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const SWrap = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 0;
  margin-left: -200px;
  background-color: white;
  z-index: 20;
  @media screen and (max-width: 400px) {
    margin-left: -50%;
  }
`;
const SHeader = styled.div`
  width: 100%;
  background-color: #ebc7e8;
`;
const LogoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  position: relative;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 5px;
`;
const LogoTxt = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;
const Close = styled.div`
  font-size: 24px;
`;
const Container = styled.div`
  width: 100%;
  padding: 15px 0;
`;
const Con = styled.div`
  padding: 15px 30px;
  & a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #343434;
  }
`;
const ConImg = styled.img`
  width: 30px;
  margin-right: 20px;
`;
const ConTxt = styled.h3`
  font-size: 18px;
`;

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Wrap>
      <Button
        border={"none"}
        background={"none"}
        color={"white"}
        ref={btnRef}
        onClick={onOpen}
      >
        <Bar>
          <FontAwesomeIcon icon={faBars} />
        </Bar>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <SWrap>
          <SHeader>
            <LogoWrap>
              <Logo>
                <LogoImg src={LogoPic} />
                <LogoTxt>ColorCast</LogoTxt>
              </Logo>
            </LogoWrap>
            <Button
              onClick={onClose}
              position={"absolute"}
              right={"20px"}
              top={"20px"}
              background={"none"}
              border={"none"}
              color={"white"}
              cursor={"pointer"}
            >
              <Close>
                <FontAwesomeIcon icon={faXmark} />
              </Close>
            </Button>
          </SHeader>

          <Container>
            <Con>
              <Link to={"/"} onClick={onClose}>
                <ConImg src={homePic} />
                <ConTxt>홈</ConTxt>
              </Link>
            </Con>

            <Con>
              <Link to={"/humidity"} onClick={onClose}>
                <ConImg src={humiPic} />
                <ConTxt>습도</ConTxt>
              </Link>
            </Con>

            <Con>
              <Link to={"/air"} onClick={onClose}>
                <ConImg src={airPic} />
                <ConTxt>대기질 오염 수치</ConTxt>
              </Link>
            </Con>

            <Con>
              <Link to={"/wind"} onClick={onClose}>
                <ConImg src={windPic} />
                <ConTxt>풍향 / 풍속</ConTxt>
              </Link>
            </Con>
          </Container>
        </SWrap>
      </Drawer>
    </Wrap>
  );
};
