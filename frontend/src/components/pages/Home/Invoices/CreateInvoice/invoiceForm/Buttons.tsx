import { Flex, Button } from "@chakra-ui/react";
import { Button1 } from "../../../../../../styles/Buttonts";

//Types

import { FormProps } from "react-hook-form";
const Buttons: React.FC<FormProps> = ({ handleSubmit }) => {
  const handleForm = () => {
    handleSubmit();
  };
  return (
    <Flex>
      <Button {...Button1}>Discard</Button>
      <Button {...Button1}>Save As Draft</Button>
      <Button onClick={() => handleForm()} {...Button1}>
        Save & Send
      </Button>
    </Flex>
  );
};

export default Buttons;
