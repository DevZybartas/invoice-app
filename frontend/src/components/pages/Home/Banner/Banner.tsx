import { Flex, Text, Image, Button } from "@chakra-ui/react";
import {
  HeadingM,
  BodyTextVariant,
  HeadingS,
} from "../../../../styles/Typography";

const Banner = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "2.75rem" }}
      mt={{ base: "1.875rem" }}
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
            <Text {...HeadingM}>Invoices</Text>
            <Text {...BodyTextVariant} opacity="0.5">
              7 Invoices
            </Text>
          </Flex>

          <Flex
            alignItems={{ base: "center" }}
            justifyContent={{ base: "center" }}
            border="1px solid red"
            width={{ base: "30%" }}
          >
            <Text {...HeadingS}>Filter</Text>
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
