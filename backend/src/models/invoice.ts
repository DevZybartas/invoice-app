import { InferSchemaType, Schema, model } from "mongoose";

const invoiceSchema = new Schema({
  streetAddress: { type: String, required: true },
  city: { type: String },
  postCode: { type: Number },
  country: { type: String },
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  invoiceDate: { type: Date, required: true },
  paymentTerms: { type: Number, required: true },
  projectDesc: { type: String },
});

type Invoice = InferSchemaType<typeof invoiceSchema>;

export default model<Invoice>("Invoice", invoiceSchema);
