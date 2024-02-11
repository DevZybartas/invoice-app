import { Flex, Text, Image, Button } from "@chakra-ui/react";
import InputField from "./InputField";

import { UseFormRegister, FieldValues } from "react-hook-form";

//Types

type ItemListProps = {
  errors: {
    qty: number;
    price: number;
    itemName: string;
  };
  register: UseFormRegister<FieldValues>;
};
const ItemList: React.FC<ItemListProps> = ({ register, errors }) => {
  return (
    <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
      <Text as="label">Item list</Text>
      <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
        <InputField
          {...register("itemName", { required: "Field can't be empty" })}
          errors={errors.itemName}
          label="Item name"
          placeholder="Banner design"
        />
      </Flex>
      <Flex>
        <InputField
          {...register("qty", { required: "Field can't be empty" })}
          errors={errors.qty}
          label="Qty"
          placeholder="1"
        />
        <InputField
          {...register("price", { required: "Field can't be empty" })}
          errors={errors.price}
          label="Price"
          placeholder="156.00"
        />
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
