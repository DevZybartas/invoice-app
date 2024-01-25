import { Flex } from "@chakra-ui/react";
import Banner from "./Banner/Banner";
const HomePage = () => {
  return (
    <Flex
      as="section"
      width="100%"
      border="1px solid red"
      h="100vh"
      paddingX="mobile.22"
    >
      <Banner />
    </Flex>
  );
};

export default HomePage;
