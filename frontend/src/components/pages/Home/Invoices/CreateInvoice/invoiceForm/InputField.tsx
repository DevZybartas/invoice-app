import { forwardRef } from "react";
import { Input, Flex, Text } from "@chakra-ui/react";

import { HeadingSVariant } from "../../../../../../styles/Typography";

type InputFieldProps = {
  placeholder: string;
  errors?: { message: string } | undefined;
  label: string;
  type: string;
  [prop: string]: unknown;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const { placeholder, label, type, ...other } = props;

    let errorMessage;
    if (props.errors) {
      errorMessage = props.errors.message;
    }

    return (
      <>
        <Flex
          flexDir={{ base: "column" }}
          width="100%"
          marginBottom={{ base: "mobile.24" }}
        >
          <Flex width="100%" flexDir={{ base: "column" }}>
            <Flex
              justifyContent={{ base: "space-between" }}
              mb={{ base: ".5625rem" }}
              width="100%"
            >
              <Text
                as="label"
                {...HeadingSVariant}
                fontSize={{ base: ".8125rem" }}
                fontWeight="medium"
                color="color.7"
              >
                {label}
              </Text>

              <Text
                fontFamily="main.100"
                fontSize={{ base: "12px" }}
                fontWeight="medium"
                letterSpacing="-0.2"
                color="#CD2C2C"
              >
                {errorMessage}
              </Text>
            </Flex>
          </Flex>
          <Input
            ref={ref}
            placeholder={placeholder}
            type={type}
            id={label}
            {...other}
            width="100%"
            autoComplete="off"
            height={{ base: "3rem" }}
            _placeholder={{
              color: "color.8",
              fontSize: ".9375rem",
              fontWeight: "bold",
            }}
          />
        </Flex>
      </>
    );
  }
);

export default InputField;
