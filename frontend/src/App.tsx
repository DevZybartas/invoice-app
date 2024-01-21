import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  border: 1px solid red;
`;

const App: React.FC = () => {
  return (
    <div>
      <Button>Default Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
};
export default App;
