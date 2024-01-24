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
  display: flex;
  @media ${device.mobile} {
    width: 72%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BoxRight = styled.div`
  @media ${device.mobile} {
    width: 28%;
    height: 100%;
  }
`;

export const Box = styled.div`
  @media ${device.mobile} {
    width: 4.875rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const BannerButton = styled.div`
  @media ${device.mobile} {
    width: 5.625rem;
    height: 2.75rem;
    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.colors.purple01};
    color: white;
    display: flex;

    align-items: center;
  }
`;

// Button Plus Icon
export const PlusIcon = styled.img``;

export const IconBox = styled.div`
  display: flex;
  @media ${device.mobile} {
    width: 2rem;
    height: 2rem;
    background-color: white;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-left: 0.375rem;
    margin-right: 0.5rem;
  }
`;

export const ArrowDown = styled.img`
  @media ${device.mobile} {
    width: 9px;
    height: 0.3125rem;
  }
`;
