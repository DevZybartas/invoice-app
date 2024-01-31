import { createContext } from "react";

export const InvoiceContext = createContext({} as IAppContext);

export const InvoiceContextProvider = ({ children }: AppProvider) => {
  return <InvoiceContext.Provider value={}>{children}</InvoiceContext.Provider>;
};
