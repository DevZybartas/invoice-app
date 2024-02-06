import { Flex, Text } from "@chakra-ui/react";
import { HeadingSVariant } from "../../../../../../styles/Typography";

//Components
import InputField from "./InputField";

const BillTo = () => {
  return (
    <Flex flexDir={{ base: "column" }} width={{ base: "100%" }}>
      <Text
        as="label"
        marginBottom={{ base: "mobile.24" }}
        {...HeadingSVariant}
        color="color.1"
      >
        Bill To
      </Text>

      {/* Client Contacts*/}
      <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
        <InputField label="Client's Name" placeholder="Alex Grim" />
        <InputField label="Client's Email" placeholder="alexgrim@mail.com" />
      </Flex>
      {/* Client Contacts */}

      {/* Address */}
      <Flex flexDir={{ base: "column" }}>
        <InputField label="Street Address" placeholder="84 Church Way" />

        <Flex gap={{ base: "mobile.24" }}>
          <InputField label="City" placeholder="Bradford" />
          <InputField label="Post Code" placeholder="BD1 9PB" />
        </Flex>
      </Flex>
      {/* address */}

      {/* Country */}
      <Flex>
        <InputField label="Country" placeholder="United Kingdom" />
      </Flex>
      {/* Country */}
    </Flex>
  );
};

export default BillTo;
