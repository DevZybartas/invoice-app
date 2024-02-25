//Components
import Invoice from "./Invoice";

//Types
import { InvoiceItem } from "../../../../types/types";

import { useGetInvoicesQuery } from "../../../../features/api/invoicesApi";
const Invoices = () => {
  const {
    data: invoices,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetInvoicesQuery();

  console.log(invoices);

  let content;

  if (isLoading) {
    <p>Loading...</p>;
  }

  if (isSuccess) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    content = JSON.stringify(invoices);
  }
  if (isError) {
    <p>{error.message}</p>;
  }

  return (
    <>
      {invoices?.map((item: InvoiceItem) => (
        <Invoice key={item._id} {...item} />
      ))}
    </>
  );
};

export default Invoices;
