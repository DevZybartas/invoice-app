import { createContext } from "react";
//React query

//Chakra
import { useDisclosure } from "@chakra-ui/react";

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

  return (
    <InvoiceContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </InvoiceContext.Provider>
  );
};
