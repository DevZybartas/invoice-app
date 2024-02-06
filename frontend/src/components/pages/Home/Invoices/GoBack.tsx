import { Flex, Image, Text } from "@chakra-ui/react";
import { HeadingSVariant } from "../../../../styles/Typography";

const GoBack = () => {
  return (
    <Flex
      alignContent={{ base: "center" }}
      alignItems={{ base: "center" }}
      marginBottom={{ base: "1.875rem" }}
    >
      <Image
        src="/icon-arrow-left.svg"
        width={{ base: ".5625rem" }}
        height={{ base: ".3125rem" }}
        marginRight={{ base: "1.5rem" }}
      />
      <Text {...HeadingSVariant}>Go back</Text>
    </Flex>
  );
};

export default GoBack;
