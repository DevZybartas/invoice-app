import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const invoiceApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getInvoices: builder.query({
      query: () => "/api/invoices",
    }),

    createInvoice: builder.mutation({
      query: (data) => ({
        url: "http://localhost:5000/api/invoices",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetInvoicesQuery, useCreateInvoiceMutation } = invoiceApi;
