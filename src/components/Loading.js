import { PulseLoader } from "react-spinners";
import { styled } from "styled-components";

const SLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Loading = () => {
  return (
    <SLoading>
      <PulseLoader color="white" size={10} />
    </SLoading>
  );
};
