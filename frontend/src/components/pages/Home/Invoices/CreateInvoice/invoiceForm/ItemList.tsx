import { Flex, Text, Image, Button } from "@chakra-ui/react";
import InputField from "./InputField";

import { UseFormRegister, FieldValues, useWatch } from "react-hook-form";

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
  watch,
}) => {
  const { append, fields, remove } = useFieldArray({
    control,
    name: "test",
  });

  const Total = ({ control }: { control: Control<FormValues> }) => {
    const formValues = useWatch({
      name: "test",
      control,
    });
    const total = formValues.reduce(
      (acc, current) => acc + (current.price || 0) * (current.qty || 0),
      0
    );
    console.log(formValues);
    return <p>{total}</p>;
  };

  return (
    <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
      <Text as="label">Item list</Text>
      {/* <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
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
      </Flex> */}
      <Flex flexDir={{ base: "column" }}>
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
      <Total control={control} />
    </Flex>
  );
};

export default ItemList;
