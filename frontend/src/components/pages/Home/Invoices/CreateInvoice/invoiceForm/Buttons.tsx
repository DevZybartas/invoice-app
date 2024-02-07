import { Flex, Button } from "@chakra-ui/react";
import { Button1 } from "../../../../../../styles/Buttonts";
const Buttons = () => {
  return (
    <Flex>
      <Button {...Button1}>Discard</Button>
      <Button {...Button1}>Save As Draft</Button>
      <Button {...Button1}>Save & Send</Button>
    </Flex>
  );
};

export default Buttons;
