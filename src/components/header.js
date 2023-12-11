import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  padding: 40px 15px;
`;
const Bar = styled.div`
  font-size: 22px;
`;
export const Header = () => {
  return (
    <Wrap>
      <Bar>
        <FontAwesomeIcon icon={faBars} />
      </Bar>
    </Wrap>
  );
};
