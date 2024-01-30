import { Flex } from "@chakra-ui/react";

//Components
import Banner from "./Banner/Banner";
import Invoices from "./Invoices/Invoices";

const HomePage = () => {
  return (
    <Flex
      as="section"
      width="100%"
      h="100vh"
      paddingX="mobile.22"
      flexDir={{ base: "column" }}
    >
      <Banner />
      <Invoices />
    </Flex>
  );
};

export default HomePage;
