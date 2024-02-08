import { createContext } from "react";
//React query
import { useQuery } from "react-query";

//Chakra
import { useDisclosure } from "@chakra-ui/react";

//Axios
import axios from "axios";

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
  //Get all invoices
  const getInvoices = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.get("http://localhost:5000/api/invoices");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Create invoice

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
