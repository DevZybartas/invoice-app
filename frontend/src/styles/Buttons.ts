import styled from "styled-components";

export const Button1 = styled.button`
  background-color: ${({ theme }) => theme.colors.purple01};
  width: 150px;
  height: 48px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.purpleHover02};
  }
`;
