import { Flex, Button } from "@chakra-ui/react";

//React hook form
import { SubmitHandler, useForm } from "react-hook-form";

// React query

//Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";
import Buttons from "./Buttons";

import { useCreateInvoiceMutation } from "../../../../../../features/api/invoicesApi";

import { InvoiceItem } from "../../../../../../types/types";

//Types
import { UseFormRegister, FieldValues } from "react-hook-form";
import axios from "axios";

// Types
type Inputs = {
  streetAddress: string;
  exampleRequired: string;
};

export type FormProps = {
  handleSubmit: () => void;
  register: UseFormRegister<FieldValues>;
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const Form: React.FC<FormProps> = () => {
  const [createInvoice] = useCreateInvoiceMutation();
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<InvoiceItem> = async (data) => {
    console.log(data);
    try {
      const response = await createInvoice(data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      flexDir={{ base: "column" }}
    >
      <BillFrom register={register} errors={errors} />
      <BillTo register={register} errors={errors} />
      <ItemList register={register} errors={errors} control={control} />
      <Buttons handleSubmit={handleSubmit(onSubmit)} getValues={getValues} />
    </Flex>
  );
};

export default Form;
