import styled from "styled-components";
import { HeadingL } from "./styles/Headings";
import { useThemeContext } from "./context/ThemeContext";
import { Mode } from "./types/Theme";
import { Button1 } from "./styles/Buttons";
interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  border: 1px solid red;
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const App: React.FC = () => {
  const { mode, changeMode } = useThemeContext();

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light);
  };
  return (
    <Container>
      <Button>Default Button</Button>
      <Button primary>Primary Button</Button>
      <HeadingL>Spartan</HeadingL>
      <Button1 onClick={() => toggleMode()}></Button1>
    </Container>
  );
};
export default App;
