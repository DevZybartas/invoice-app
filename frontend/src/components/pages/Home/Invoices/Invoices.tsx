import { useQuery } from "react-query";
import axios from "axios";
import Invoice from "./Invoice";

//Types

import { InvoiceItem } from "../../../../types/types";
const Invoices = () => {
  const getInvoices = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.get("http://localhost:5000/api/invoices");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, status, isLoading } = useQuery("invoices", getInvoices);
  console.log(data);

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
