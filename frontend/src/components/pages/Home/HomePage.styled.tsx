import styled from "styled-components";
import { device } from "../../../styles/Breakpoints";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  border: 1px solid red;

  @media ${device.mobile} {
    padding-top: 1.875rem;
    padding-left: ${({ theme }) => theme.paddings.mobile};
    padding-right: ${({ theme }) => theme.paddings.mobile};
  }
`;
