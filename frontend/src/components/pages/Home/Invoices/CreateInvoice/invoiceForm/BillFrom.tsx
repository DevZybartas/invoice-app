//Chakra
import { Flex, Text } from "@chakra-ui/react";
import { HeadingSVariant } from "../../../../../../styles/Typography";

//Components
import InputField from "./InputField";

const BillFrom = () => {
  return (
    <Flex flexDir={{ base: "column" }} width={{ base: "100%" }}>
      <Text
        as="label"
        marginBottom={{ base: "mobile.24" }}
        {...HeadingSVariant}
        color="color.1"
      >
        Bill From
      </Text>

      {/* Street Address */}
      <Flex width={{ base: "100%" }}>
        <InputField label="Street Address" placeholder="19 Union Terrace" />
      </Flex>
      {/* Street Address */}

      {/* City and Post Code */}
      <Flex gap={{ base: "mobile.24" }}>
        <InputField label="City" placeholder="London" />
        <InputField label="Post Code" placeholder="E1 3EZ" />
      </Flex>
      {/* City and Post Code */}

      {/* Country */}
      <Flex>
        <InputField label="Country" placeholder="United Kingdom" />
      </Flex>
      {/* Country */}
    </Flex>
  );
};

export default BillFrom;
