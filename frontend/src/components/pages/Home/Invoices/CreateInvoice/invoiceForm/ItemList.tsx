import { Flex, Text, Image, Button } from "@chakra-ui/react";
import InputField from "./InputField";

import { UseFormRegister, FieldValues, useFieldArray } from "react-hook-form";
import { useState } from "react";

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
  const [inputs, setInputs] = useState([{ itemName: "", qty: "", price: "" }]);

  const handleInputChange = (e, i) => {
    const field = e.target.name;
    const newInputs = [...inputs];
    newInputs[i][field] = e.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { itemName: "", qty: "", price: "" }]);
  };

  const handleDeleteTodo = (i) => {
    const newInputs = [...inputs];
    newInputs.splice(i, 1);
    setInputs(newInputs);
  };
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
      <Flex>
        {inputs.map((val, i) => (
          <>
            <Flex flexDir={{ base: "column" }} key={i} border="1px solid red">
              <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
                <InputField
                  {...register("itemName", {
                    required: "Field can't be empty",
                  })}
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
                  onClick={() => handleDeleteTodo(i)}
                />
              </Flex>
            </Flex>
          </>
        ))}
      </Flex>

      <Button onClick={handleAddInput}>+ Add New Item</Button>
    </Flex>
  );
};

export default ItemList;
