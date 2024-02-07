//Chakra UI
import { Flex, Image, Text } from "@chakra-ui/react";
import { HeadingSVariant } from "../../../../../styles/Typography";

//Components
import Status from "./Status";
import InvoiceBody from "./InvoiceBody";
import Summary from "./Summary";
import InvoiceButtons from "./InvoiceButtons";
import ComfirmModal from "../ComfirmDeletion/ComfirmModal";

const InvoiceDetail = () => {
  return (
    <Flex
      width="100%"
      flexDir={{ base: "column" }}
      paddingX={{ base: "mobile.22" }}
      marginTop={{ base: "1.875rem" }}
    >
      {/* Status */}
      <Status />
      {/* Status */}

      <InvoiceBody />

      <Summary />

      <InvoiceButtons />

      <ComfirmModal />
    </Flex>
  );
};

export default InvoiceDetail;
