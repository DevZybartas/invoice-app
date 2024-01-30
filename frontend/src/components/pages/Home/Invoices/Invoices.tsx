import { useQuery } from "react-query";
import axios from "axios";

const Invoices = () => {
  const getInvoices = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const invoices = await axios.get("http://localhost:5000/api/invoices");
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

  return <div>{data?.map((invoice) => console.log(invoice))}</div>;
};

export default Invoices;
