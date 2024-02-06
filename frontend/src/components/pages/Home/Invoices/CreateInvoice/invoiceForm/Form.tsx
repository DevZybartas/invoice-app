import { Flex } from "@chakra-ui/react";

//Components

import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
const Form = () => {
  return (
    <Flex as="form" flexDir={{ base: "column" }}>
      <BillFrom />
      <BillTo />
    </Flex>
  );
};

export default Form;
