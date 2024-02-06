import { Flex, Text } from "@chakra-ui/react";
import { HeadingM } from "../../../../../styles/Typography";

//Components
import GoBack from "../GoBack";
import Form from "./invoiceForm/Form";

const CreateInvoice = () => {
  return (
    <Flex
      as="section"
      width={{ base: "100%" }}
      paddingX={{ base: "mobile.22" }}
      paddingY={{ base: "1.875rem" }}
      flexDir={{ base: "column" }}
      border="1px solid red"
    >
      <GoBack />

      <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
        <Flex mb={{ base: "1.875rem" }}>
          <Text {...HeadingM}>New Invoice</Text>
        </Flex>

        <Form />
      </Flex>
    </Flex>
  );
};

export default CreateInvoice;
