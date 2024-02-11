import { Flex, Text } from "@chakra-ui/react";
import { HeadingSVariant } from "../../../../../../styles/Typography";

//Components
import InputField from "./InputField";

//Types

import { UseFormRegister, FieldValues } from "react-hook-form";

type BillToProps = {
  errors: {
    clientName: string;
    clientEmail: string;
    clientStreetAddress: string;
    clientCity: string;
    clientPostCode: string;
    clientCountry: string;
    invoiceDate: number;
    paymentTerms: number;
    projectDesc: string;
  };
  register: UseFormRegister<FieldValues>;
};

const BillTo: React.FC<BillToProps> = ({ errors, register }) => {
  return (
    <Flex flexDir={{ base: "column" }} width={{ base: "100%" }}>
      <Text
        as="label"
        marginBottom={{ base: "mobile.24" }}
        {...HeadingSVariant}
        color="color.1"
      >
        Bill To
      </Text>

      {/* Client Contacts*/}
      <Flex width={{ base: "100%" }} flexDir={{ base: "column" }}>
        <InputField
          {...register("clientName", { required: "Field can't be empty" })}
          label="Client's Name"
          placeholder="Alex Grim"
          errors={errors.clientName}
        />
        <InputField
          {...register("clientEmail", { required: "Field can't be empty" })}
          label="Client's Email"
          placeholder="alexgrim@mail.com"
          errors={errors.clientEmail}
        />
      </Flex>
      {/* Client Contacts */}

      {/* Address */}
      <Flex flexDir={{ base: "column" }}>
        <InputField
          {...register("clientStreetAddress", {
            required: "Field can't be empty",
          })}
          label="Street Address"
          placeholder="84 Church Way"
          errors={errors.clientStreetAddress}
        />

        <Flex gap={{ base: "mobile.24" }}>
          <InputField
            {...register("clientCity", { required: "Field can't be empty" })}
            errors={errors.clientCity}
            label="City"
            placeholder="Bradford"
          />
          <InputField
            {...register("clientPostCode", {
              required: "Field can't be empty",
            })}
            errors={errors.clientPostCode}
            label="Post Code"
            placeholder="BD1 9PB"
          />
        </Flex>
      </Flex>
      {/* address */}

      {/* Country */}
      <Flex>
        <InputField
          {...register("clientCountry", { required: "Field can't be empty" })}
          errors={errors.clientCountry}
          label="Country"
          placeholder="United Kingdom"
        />
      </Flex>
      {/* Country */}

      <Flex flexDir={{ base: "column" }}>
        <InputField
          {...register("invoiceDate", { required: "Field can't be empty" })}
          errors={errors.invoiceDate}
          label="Invoice Date"
          placeholder="21 Aug 2021"
        />
        <InputField
          {...register("paymentTerms", { required: "Field can't be empty" })}
          errors={errors.paymentTerms}
          label="Payment Terms"
          placeholder="Net 30 days"
        />

        <InputField
          {...register("projectDesc", { required: "Field can't be empty" })}
          errors={errors.projectDesc}
          label="Project Description"
          placeholder="Graphic Design"
        />
      </Flex>
    </Flex>
  );
};

export default BillTo;
