import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 72px;
  background-color: #373b53;
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-right: 1.375rem;
  }
`;

export const ThemeImg = styled.img`
  @media (max-width: 768px) {
  }
`;

export const Logo = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.colors.purple01};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    border-top-right-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
  }
`;

export const LogoImg = styled.img`
  width: 1.75rem;
  height: 1.625rem;
`;

// Mobile navbar avatar section

export const FlexBox = styled.div`
  height: 100%;
  @media (max-width: 768px) {
    width: 27%;
    border-left: 1px solid #494e6e;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Avatar = styled.img`
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`;
