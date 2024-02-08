import { Flex } from "@chakra-ui/react";

//React hook form
import { useForm } from "react-hook-form";

// React query

import { useMutation } from "react-query";

//Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";
import Buttons from "./Buttons";

// Types
type Inputs = {
  streetAddress: string;
  exampleRequired: string;
};

export type FormProps = {
  handleSubmit: () => void;
};

const Form: React.FC<FormProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = () => {
    console.log(watch("streetAddress"));
  };

  return (
    <Flex
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      flexDir={{ base: "column" }}
    >
      <BillFrom register={register} errors={errors} />
      <BillTo />
      <ItemList />
      <Buttons handleSubmit={onSubmit} getValues={getValues} />
    </Flex>
  );
};

export default Form;
