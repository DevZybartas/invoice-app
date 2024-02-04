import { Flex, Box } from "@chakra-ui/react";
import { Button5, Button3, Button2 } from "../../../../../styles/Buttonts";
const InvoiceButtons = () => {
  return (
    <Flex
      width={{ base: "100%" }}
      height={{ base: "5.6875rem" }}
      justifyContent={{ base: "space-between" }}
      padding={{ base: "mobile.22" }}
      border="1px solid red"
    >
      <Box as="button" {...Button3}>
        Edit
      </Box>
      <Box as="button" {...Button5}>
        Delete
      </Box>
      <Box as="button" {...Button2}>
        Mark as paid
      </Box>
    </Flex>
  );
};

export default InvoiceButtons;
