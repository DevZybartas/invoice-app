import {
  NavbarContainer,
  Logo,
  Box,
  LogoImg,
  ThemeImg,
  FlexBox,
  Avatar,
} from "./Navbar.styled";

// Context

import { useThemeContext } from "../../context/ThemeContext";
import { Mode } from "../../types/Theme";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function MobileNavbar({}: Props) {
  const { mode, changeMode } = useThemeContext();

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light);
  };
  return (
    <NavbarContainer>
      <Box>
        {/* Logo Container */}
        <Logo>
          <LogoImg src="/logo.svg" />
        </Logo>
        {/* Logo Container */}

        {/* Mobile Navbar theme switch Icons */}
        {mode === Mode.Light ? (
          <ThemeImg onClick={() => toggleMode()} src="/icon-moon.svg" />
        ) : (
          <ThemeImg onClick={() => toggleMode()} src="/icon-sun.svg" />
        )}
        {/* Mobile Navbar theme switch Icons */}
      </Box>
      <FlexBox>
        <Avatar src="/image-avatar.jpg" />
      </FlexBox>
    </NavbarContainer>
  );
}

export default MobileNavbar;
