import { createContext } from "react";
//React query
import { useQuery } from "react-query";

//Chakra
import { useDisclosure } from "@chakra-ui/react";

import { getInvoices } from "../api/invoices_api";

//Types
import { InvoiceItem } from "../types/types";

type InvoiceContextProps = {
  data: InvoiceItem[];
  getInvoices: () => void;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

type InvoiceProvider = {
  children: React.ReactNode;
};

export const InvoiceContext = createContext({} as InvoiceContextProps);

export const InvoiceContextProvider = ({ children }: InvoiceProvider) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Create invoice

  // const createInvoice = async () => {
  //   try {
  //     const newInvoice = await axios.post("http://localhost:5000/api/invoices");
  //   } catch (error) {}
  // };

  const { data, status, isLoading } = useQuery<InvoiceItem[]>(
    "invoices",
    getInvoices
  );

  return (
    <InvoiceContext.Provider
      value={{ getInvoices, data, status, isLoading, isOpen, onOpen, onClose }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
