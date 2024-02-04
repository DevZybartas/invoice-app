import { Text, Flex } from "@chakra-ui/react";

const Status = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "5.6875rem" }}
      justifyContent={{ base: "space-between" }}
      alignItems={{ base: "center" }}
      paddingX={{ base: "24px" }}
    >
      <Text>Status</Text>
      <Flex
        width={{ base: "6.5rem" }}
        height={{ base: "2.5rem" }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
      >
        <Text>Pending</Text>
      </Flex>
    </Flex>
  );
};

export default Status;
