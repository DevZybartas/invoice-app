import { Flex, Text, Link } from "@chakra-ui/react";
import { BodyTextVariant, HeadingS } from "../../../../styles/Typography";

//Types

import { InvoiceItem } from "../../../../types/types";

const Invoice: React.FC<InvoiceItem> = ({
  clientName,
  invoiceDate,
  price,
  _id,
}) => {
  return (
    <>
      <Link href={`/invoice/${_id}`}>
        <Flex
          width={{ base: "100%" }}
          height={{ base: "8.375rem" }}
          padding={{ base: "25px" }}
          flexDir={{ base: "column" }}
          bgColor="color.white"
          mt={{ base: "20px" }}
          borderRadius={{ base: "0.5rem" }}
        >
          <Flex
            width={{ base: "100%" }}
            justifyContent={{ base: "space-between" }}
            marginBottom={{ base: "24px" }}
          >
            <Text {...HeadingS}>
              <Text as="span" color="color.6">
                #
              </Text>
              RT3080
            </Text>
            <Text {...BodyTextVariant} color="color.6">
              {clientName}
            </Text>
          </Flex>
          <Flex
            width="100%"
            height={{ base: "48px" }}
            justifyContent={{ base: "space-between" }}
          >
            <Flex
              flexDir={{ base: "column" }}
              justifyContent={{ base: "space-between" }}
            >
              <Text {...BodyTextVariant} color="color.6">
                Due {invoiceDate}
              </Text>
              <Text {...HeadingS}>{price}</Text>
            </Flex>
            <Flex>
              <Flex
                width={{ base: "6.5rem" }}
                height={{ base: "40px" }}
                color="#33D69F"
                borderRadius={{ base: "6px" }}
                justifyContent={{ base: "center" }}
                alignItems={{ base: "center" }}
              >
                <Text>Paid</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </>
  );
};

export default Invoice;
