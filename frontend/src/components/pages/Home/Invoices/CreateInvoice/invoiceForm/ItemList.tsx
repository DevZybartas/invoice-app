import { Flex, Text, Image, Button } from "@chakra-ui/react";
import InputField from "./InputField";
const ItemList = () => {
  return (
    <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
      <Text as="label">Item list</Text>
      <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
        <InputField label="Item name" placeholder="Banner design" />
      </Flex>
      <Flex>
        <InputField label="Qty" placeholder="1" />
        <InputField label="Price" placeholder="156.00" />
        <Flex flexDir={{ base: "column" }}>
          <Text>Total</Text>
          <Text>156</Text>
        </Flex>
        <Image
          src="/icon-delete.svg"
          alt="delete"
          width={{ base: "13px" }}
          height={{ base: "16px" }}
        />
      </Flex>
      <Button>+ Add New Item</Button>
    </Flex>
  );
};

export default ItemList;
