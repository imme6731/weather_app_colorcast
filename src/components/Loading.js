import { PulseLoader } from "react-spinners";
import { styled } from "styled-components";

const SLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  display: flex;
  justify-content: center;
`;

export const Loading = () => {
  return (
    <SLoading>
      <PulseLoader color="white" size={10} />
    </SLoading>
  );
};
