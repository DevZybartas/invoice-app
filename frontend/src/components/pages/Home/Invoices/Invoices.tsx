//Components
import Invoice from "./Invoice";

//Types
import { InvoiceItem } from "../../../../types/types";

//Context
import { useContext } from "react";
import { InvoiceContext } from "../../../../context/InvoiceContext";

const Invoices = () => {
  const { data, isLoading, status } = useContext(InvoiceContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error!</p>;
  }

  return (
    <>
      {data.map((item: InvoiceItem) => (
        <Invoice key={item._id} {...item} />
      ))}
    </>
  );
};

export default Invoices;
