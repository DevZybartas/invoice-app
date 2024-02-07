import { Flex } from "@chakra-ui/react";

//Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";
import Buttons from "./Buttons";
Buttons;
const Form = () => {
  return (
    <Flex as="form" flexDir={{ base: "column" }}>
      <BillFrom />
      <BillTo />
      <ItemList />
      <Buttons />
    </Flex>
  );
};

export default Form;
