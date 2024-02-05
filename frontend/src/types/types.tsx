export interface InvoiceItem {
  clientEmail: string;
  clientName: string;
  invoiceDate: number;
  paymentTerms: number;
  projectDesc: string;
  _id: string;
  price: number;

  clientAddress: {
    streetAddress: string;
    city: string;
    postCode: number;
    country: string;
  };
  address: {
    streetAddress: string;
    city: string;
    postCode: number;
    country: string;
  };
}
