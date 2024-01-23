import {
  NavbarContainer,
  Logo,
  Box,
  LogoImg,
  ThemeImg,
  FlexBox,
  Avatar,
} from "./Navbar.styled";

type Props = {};

function MobileNavbar({}: Props) {
  return (
    <NavbarContainer>
      <Box>
        <Logo>
          <LogoImg src="/logo.svg" />
        </Logo>
        <ThemeImg src="/icon-moon.svg" />
      </Box>
      <FlexBox>
        <Avatar src="/image-avatar.jpg" />
      </FlexBox>
    </NavbarContainer>
  );
}

export default MobileNavbar;
