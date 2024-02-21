import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const invoiceApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getInvoices: builder.query({
      query: () => "/api/invoices",
    }),
  }),
});

export const { useGetInvoicesQuery } = invoiceApi;
