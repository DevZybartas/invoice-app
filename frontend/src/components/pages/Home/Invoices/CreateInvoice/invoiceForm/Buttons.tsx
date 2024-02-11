import { Flex, Button } from "@chakra-ui/react";
import { Button1 } from "../../../../../../styles/Buttonts";

//Types

const Buttons = ({ handleSubmit, getValues }) => {
  const handleForm = () => {
    handleSubmit();
    const values = getValues();
    console.log(values);
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
