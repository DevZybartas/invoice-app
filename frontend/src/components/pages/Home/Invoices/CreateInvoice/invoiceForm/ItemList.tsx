import { Flex, Text, Image, Button, Input } from "@chakra-ui/react";
import InputField from "./InputField";

import { UseFormRegister, FieldValues } from "react-hook-form";

//Types

type ItemListProps = {
  qty: number;
  price: number;
  itemName: string;
  errors: {
    qty: number;
    price: number;
    itemName: string;
  };
  register: UseFormRegister<FieldValues>;
};
const ItemList: React.FC<ItemListProps> = ({
  register,
  errors,
  useFieldArray,
  control,
}) => {
  const { append, fields, remove } = useFieldArray({
    control,
    name: "test",
  });

  const getTotal = (payload: ItemListProps["price"]) => {
    let total = 0;
    for (const item of payload) {
      total = total + item.price;
    }
  };

  const TotalAmount = ({ control }: { control: Control<ItemListProps> }) => {
    return null;
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
        {fields.map((field, index) => (
          <Flex
            flexDir={{ base: "column" }}
            key={field.id}
            border="1px solid red"
          >
            <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
              <InputField
                {...register(`test.${index}.itemName`, {
                  required: "Field can't be empty",
                })}
                errors={errors.itemName}
                label="Item name"
                placeholder="Banner design"
              />
            </Flex>
            <Flex>
              <InputField
                {...register(`test.${index}.qty`, {
                  required: "Field can't be empty",
                })}
                errors={errors.qty}
                label="Qty"
                placeholder="1"
              />
              <InputField
                {...register(`test.${index}.price`, {
                  required: "Field can't be empty",
                })}
                errors={errors.price}
                label="Price"
                placeholder="156.00"
              />
              <Flex flexDir={{ base: "column" }}>
                <TotalAmount control={control} />
                <Text>156</Text>
              </Flex>
              <Image
                src="/icon-delete.svg"
                alt="delete"
                width={{ base: "13px" }}
                height={{ base: "16px" }}
                onClick={() => remove(index)}
              />
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Button
        onClick={() => {
          append();
        }}
      >
        Add new item
      </Button>
    </Flex>
  );
};

export default ItemList;
