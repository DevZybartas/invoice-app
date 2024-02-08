import axios from "axios";

// get all invoices

export async function getInvoices() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await axios.get("http://localhost:5000/api/invoices");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// create invoice

export async function createInvoice() {
  try {
    const response = await axios.post("http://localhost:5000/api/invoices");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
