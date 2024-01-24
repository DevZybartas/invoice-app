import styled from "styled-components";
import { device } from "../../../../styles/Breakpoints";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  @media ${device.mobile} {
    height: 2.75rem;
  }
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxLeft = styled.div`
  border: 2px solid black;
  @media ${device.mobile} {
    width: 77%;
    height: 100%;
  }
`;

export const BoxRight = styled.div`
  border: 1px solid red;
  @media ${device.mobile} {
    width: 23%;
    height: 100%;
  }
`;

export const Box = styled.div`
  @media ${device.mobile} {
    border: 1px solid green;
    width: 4.875rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
