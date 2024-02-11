//Chakra
import { Flex, Text } from "@chakra-ui/react";
import { HeadingSVariant } from "../../../../../../styles/Typography";

//Components
import InputField from "./InputField";

//Types
import { UseFormRegister, FieldValues } from "react-hook-form";

type BillFromProps = {
  errors: {
    streetAddress: string;
    postCode: string;
    city: string;
    country: string;
  };
  register: UseFormRegister<FieldValues>;
};

const BillFrom: React.FC<BillFromProps> = ({ register, errors }) => {
  return (
    <Flex flexDir={{ base: "column" }} width={{ base: "100%" }}>
      <Text
        as="label"
        marginBottom={{ base: "mobile.24" }}
        {...HeadingSVariant}
        color="color.1"
      >
        Bill From
      </Text>

      {/* Street Address */}
      <Flex width={{ base: "100%" }}>
        <InputField
          {...register("streetAddress", {
            required: "Field can't be empty",
            minLength: {
              value: 4,
              message: "At least 4 letters",
            },
          })}
          label="Street Address"
          placeholder="19 Union Terrace"
          errors={errors.streetAddress}
        />
      </Flex>
      {/* Street Address */}

      {/* City and Post Code */}
      <Flex gap={{ base: "mobile.24" }}>
        <InputField
          {...register("city", { required: "Field can't be empty" })}
          label="City"
          placeholder="London"
          errors={errors.city}
        />
        <InputField
          {...register("postCode", { required: "Field can't be empty" })}
          label="Post Code"
          placeholder="E1 3EZ"
          errors={errors.postCode}
        />
      </Flex>
      {/* City and Post Code */}

      {/* Country */}
      <Flex>
        <InputField
          {...register("country", { required: "Field can't be empty" })}
          label="Country"
          placeholder="United Kingdom"
          errors={errors.country}
        />
      </Flex>
      {/* Country */}
    </Flex>
  );
};

export default BillFrom;
