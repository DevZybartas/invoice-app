import { Flex, Text, Image, Button } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "2.75rem" }}
      border="2px solid green"
    >
      <Flex
        width={{ base: "77%" }}
        height={{ base: "100%" }}
        flexDir={{ base: "column" }}
      >
        <Flex
          width={{ base: "100%" }}
          justifyContent={{ base: "space-between" }}
          border="1px solid white"
        >
          <Flex flexDir={{ base: "column" }}>
            <Text>Invoices</Text>
            <Text>7 Invoices</Text>
          </Flex>

          <Flex
            alignItems={{ base: "center" }}
            justifyContent={{ base: "center" }}
          >
            <Text>Filter</Text>
            <Image
              src="/icon-arrow-down.svg"
              alt="arrow-down"
              loading="lazy"
              width={{ base: ".5625rem" }}
              height={{ base: "4px" }}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex width={{ base: "23%" }} border="1px solid white">
        <Button>New</Button>
      </Flex>
    </Flex>
  );
};

export default Banner;
