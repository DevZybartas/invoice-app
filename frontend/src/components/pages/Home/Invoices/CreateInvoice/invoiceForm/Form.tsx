import { Flex } from "@chakra-ui/react";

//Components

import BillFrom from "./BillFrom";
const Form = () => {
  return (
    <Flex as="form">
      <BillFrom />
    </Flex>
  );
};

export default Form;
