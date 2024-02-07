import { Flex, Box } from "@chakra-ui/react";
import { Button5, Button3, Button2 } from "../../../../../styles/Buttonts";

import { useContext } from "react";
import { InvoiceContext } from "../../../../../context/InvoiceContext";
const InvoiceButtons = () => {
  const { onOpen } = useContext(InvoiceContext);
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "5.6875rem" }}
      justifyContent={{ base: "space-between" }}
      padding={{ base: "mobile.22" }}
      marginBottom={{ base: "40px" }}
    >
      <Box as="button" {...Button3}>
        Edit
      </Box>
      <Box onClick={onOpen} as="button" {...Button5}>
        Delete
      </Box>
      <Box as="button" {...Button2}>
        Mark as paid
      </Box>
    </Flex>
  );
};

export default InvoiceButtons;
