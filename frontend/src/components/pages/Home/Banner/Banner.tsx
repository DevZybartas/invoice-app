import { Flex, Text, Image, Link } from "@chakra-ui/react";
import {
  HeadingM,
  BodyTextVariant,
  HeadingS,
  HeadingSVariant,
} from "../../../../styles/Typography";

const Banner = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "2.75rem" }}
      mt={{ base: "1.875rem" }}
    >
      <Flex
        width={{ base: "72%" }}
        height={{ base: "100%" }}
        flexDir={{ base: "column" }}
      >
        <Flex
          width={{ base: "100%" }}
          justifyContent={{ base: "space-between" }}
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
            width={{ base: "35%" }}
          >
            <Text
              {...HeadingSVariant}
              letterSpacing="-0.25px"
              marginRight={{ base: ".625rem" }}
            >
              Filter
            </Text>
            <Image
              src="/icon-arrow-down.svg"
              alt="arrow-down"
              loading="lazy"
              width={{ base: ".625rem" }}
              height={{ base: ".3125rem" }}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex width={{ base: "28%" }}>
        <Flex
          width={{ base: "5.625rem" }}
          height={{ base: "2.75rem" }}
          bgColor="color.1"
          color="white"
          borderRadius="1.5rem"
          display="flex"
          alignItems="center"
          {...HeadingS}
        >
          <Flex
            width={{ base: "2rem" }}
            height={{ base: "2rem" }}
            bgColor="color.white"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            marginLeft={{ base: ".375rem" }}
            marginRight={{ base: ".5rem" }}
          >
            <Image
              src="/icon-plus.svg"
              alt="plus"
              loading="lazy"
              width={{ base: ".625rem" }}
              height={{ base: ".625rem" }}
            />
          </Flex>
          New
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
