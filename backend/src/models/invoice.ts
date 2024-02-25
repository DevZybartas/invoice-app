import { InferSchemaType, Schema, model } from "mongoose";

const invoiceSchema = new Schema({
  clientStreetAddress: { type: String },
  clientCity: { type: String },
  clientPostCode: { type: Number },
  clientCountry: { type: String },
  streetAddress: { type: String },
  city: { type: String },
  postCode: { type: Number },
  country: { type: String },
  itemList: [
    {
      itemName: { type: String },
      qty: { type: Number },
      itemPrice: { type: Number },
    },
  ],
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  invoiceDate: { type: Date, required: true },
  paymentTerms: { type: Number, required: true },
  projectDesc: { type: String },
  price: { type: Number },
});

type Invoice = InferSchemaType<typeof invoiceSchema>;

export default model<Invoice>("Invoice", invoiceSchema);
