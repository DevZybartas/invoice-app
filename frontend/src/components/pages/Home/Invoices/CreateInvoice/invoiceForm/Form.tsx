import { Flex, Button } from "@chakra-ui/react";

//React hook form
import { SubmitHandler, useForm } from "react-hook-form";

// React query

//Components
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";
import Buttons from "./Buttons";

import CreateInvoice from "../CreateInvoice";

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
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<InvoiceItem> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/invoices",
        data,
        { headers: { "Content-Type": "application/json" } }
      );
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
      <ItemList register={register} errors={errors} />
      <Buttons handleSubmit={handleSubmit(onSubmit)} getValues={getValues} />
    </Flex>
  );
};

export default Form;
