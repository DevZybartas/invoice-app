import { Flex, Text } from "@chakra-ui/react";
import { BodyTextVariant } from "../../../../../styles/Typography";

const Summary = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "14.25rem" }}
      flexDir={{ base: "column" }}
      bgColor="#F9FAFE"
    >
      <Flex
        width={{ base: "100%" }}
        height={{ base: "9.25rem" }}
        flexDir={{ base: "column" }}
        padding={{ base: "mobile.24" }}
      >
        <Flex justifyContent={{ base: "space-between" }}>
          <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
            <Text>Banner design</Text>
            <Text>1x 156</Text>
          </Flex>
          <Text>156</Text>
        </Flex>
        <Flex justifyContent={{ base: "space-between" }}>
          <Flex flexDir={{ base: "column" }}>
            <Text>Banner design</Text>
            <Text>1x 156</Text>
          </Flex>
          <Flex>156</Flex>
        </Flex>
      </Flex>
      <Flex
        width={{ base: "100%" }}
        height={{ base: "5rem" }}
        bgColor="#373B53"
        padding={{ base: "mobile.24" }}
        justifyContent={{ base: "space-between" }}
        color="color.white"
      >
        <Text {...BodyTextVariant}>Grand Total</Text>
        <Text>556</Text>
      </Flex>
    </Flex>
  );
};

export default Summary;
