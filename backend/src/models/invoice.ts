import { InferSchemaType, Schema, model } from "mongoose";

const invoiceSchema = new Schema({
  clientAddress: {
    streetAddress: { type: String },
    city: { type: String },
    postCode: { type: Number },
    country: { type: String },
  },

  address: {
    streetAddress: { type: String },
    city: { type: String },
    postCode: { type: Number },
    country: { type: String },
  },

  itemList: {
    itemName: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  invoiceDate: { type: Date, required: true },
  paymentTerms: { type: Number, required: true },
  projectDesc: { type: String },
  price: { type: Number },
});

type Invoice = InferSchemaType<typeof invoiceSchema>;

export default model<Invoice>("Invoice", invoiceSchema);
