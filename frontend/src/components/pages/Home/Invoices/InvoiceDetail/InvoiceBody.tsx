import { Flex, Text } from "@chakra-ui/react";

import { BodyText, HeadingS } from "../../../../../styles/Typography";
const InvoiceBody = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "100%" }}
      padding={{ base: "mobile.24" }}
      flexDir={{ base: "column" }}
    >
      {/* Invoice number */}
      <Flex flexDir={{ base: "column" }} marginBottom={{ base: "30px" }}>
        <Text>#XM9141</Text>
        <Text>Graphic Designer</Text>
      </Flex>
      {/* Invoice number */}

      {/* Invoice address */}
      <Flex width={{ base: "30%" }} marginBottom={{ base: "1.875rem" }}>
        <Text {...BodyText} color="color.6">
          19 Union Terrace London E1 3EZ United Kingdom
        </Text>
      </Flex>
      {/* Invoice address */}

      {/* Invoice Date */}
      <Flex width={{ base: "100%" }}>
        <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
          {/* Invoice Date */}
          <Flex flexDir={{ base: "column" }}>
            <Text
              {...BodyText}
              color="color.7"
              marginBottom={{ base: ".8125rem" }}
            >
              Invoice Date
            </Text>
            <Text {...HeadingS} marginBottom={{ base: "1.875rem" }}>
              21 Aug 2021
            </Text>
          </Flex>
          {/* Invoice Date */}

          {/* Payment Due */}
          <Flex flexDir={{ base: "column" }}>
            <Text
              {...BodyText}
              color="color.7"
              marginBottom={{ base: ".8125rem" }}
            >
              Payment Due
            </Text>
            <Text {...HeadingS} marginBottom={{ base: "1.875rem" }}>
              20 Sep 2021
            </Text>
          </Flex>
          {/* Payment Due */}

          {/* Sent to */}
          <Flex flexDir={{ base: "column" }}>
            <Text
              {...BodyText}
              color="color.7"
              marginBottom={{ base: ".8125rem" }}
            >
              Sent to
            </Text>
            <Text {...HeadingS}>alexgrim@mail.com</Text>
          </Flex>
          {/* Sent to */}
        </Flex>
        <Flex width={{ base: "60%" }} flexDir={{ base: "column" }}>
          <Flex flexDir={{ base: "column" }}>
            <Text
              {...BodyText}
              color="color.7"
              marginBottom={{ base: ".8125rem" }}
            >
              Bill to
            </Text>
            <Text {...HeadingS}>Alex Grim</Text>
            <Text {...BodyText} color="color.7">
              84 Church Way Bradford BD1 9PB United Kingdom
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Invoice Date */}
      <Flex></Flex>
    </Flex>
  );
};

export default InvoiceBody;
