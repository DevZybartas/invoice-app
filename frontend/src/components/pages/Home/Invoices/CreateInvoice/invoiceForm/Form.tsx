import { Flex } from "@chakra-ui/react";

//React hook form
import { useForm, SubmitHandler } from "react-hook-form";

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
    formState: { errors },
  } = useForm<Inputs>();

  console.log(watch("streetAddress"));

  const onSubmit = () => {
    console.log("good");
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
      <Buttons handleSubmit={onSubmit} />
    </Flex>
  );
};

export default Form;
