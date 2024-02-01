//Chakra UI
import { Flex, Image, Text } from "@chakra-ui/react";
import { HeadingSVariant } from "../../../../../styles/Typography";

//Components
import Status from "./Status";
import InvoiceBody from "./InvoiceBody";

const InvoiceDetail = () => {
  return (
    <Flex
      width="100%"
      flexDir={{ base: "column" }}
      paddingX={{ base: "mobile.22" }}
      marginTop={{ base: "1.875rem" }}
    >
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

      {/* Status */}
      <Status />
      {/* Status */}

      <InvoiceBody />
    </Flex>
  );
};

export default InvoiceDetail;
