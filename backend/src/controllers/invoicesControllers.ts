import { RequestHandler } from "express";
import InvoiceModel from "../models/invoice";
import createHttpError from "http-errors";
import mongoose from "mongoose";

// @desc    Get all movies
// @route   GET /api/invoices
// @access  Public

export const getInvoices: RequestHandler = async (req, res, next) => {
  try {
    const invoices = await InvoiceModel.find().exec();
    res.status(200).json(invoices);
  } catch (error) {
    next(error);
  }
};

// @desc    Get one invoice
// @route   GET /api/invoices
// @access  Public

export const getInvoice: RequestHandler = async (req, res, next) => {
  const invoiceId = req.params.invoiceId;
  try {
    const invoice = await InvoiceModel.findById(invoiceId).exec();
    res.status(200).json(invoice);
  } catch (error) {
    next(error);
  }
};

// @desc    create invoice
// @route   POST /api/invoices
// @access  Public

interface CreateInvc {
  streetAddress: string;
  city: string;
  postCode: number;
  country: string;
  clientName: string;
  clientEmail: string;
  invoiceDate: number;
  paymentTerms: number;
  projectDesc: string;
  price: number;
}

export const createInvoice: RequestHandler<
  unknown,
  unknown,
  CreateInvc,
  unknown
> = async (req, res, next) => {
  const {
    streetAddress,
    city,
    postCode,
    country,
    clientName,
    clientEmail,
    invoiceDate,
    paymentTerms,
    projectDesc,
    price,
  } = req.body;
  try {
    const newInvoice = await InvoiceModel.create({
      streetAddress,
      city,
      postCode,
      country,
      clientEmail,
      clientName,
      invoiceDate,
      paymentTerms,
      projectDesc,
      price,
    });
    res.status(201).json(newInvoice);
  } catch (error) {
    next(error);
  }
};

// @desc    Update invoice
// @route   PATCH /api/invoice/id
// @access  Public

export const updateInvoice: RequestHandler = async (req, res, next) => {
  const invoiceId = req.params.invoiceId;

  console.log(req.body);
  try {
    if (!mongoose.isValidObjectId(invoiceId)) {
      throw createHttpError(400, "Invalid note id");
    }
    const updatedInvoice = await InvoiceModel.findByIdAndUpdate(
      invoiceId,

      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedInvoice);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete invoice
// @route   Delete /api/invoice/id
// @access  Public

export const deleteInvoice: RequestHandler = async (req, res, next) => {
  const invoiceId = req.params.invoiceId;
  try {
    const deletedInvoice = await InvoiceModel.findByIdAndDelete(invoiceId);
    res.status(204).json(deletedInvoice);
  } catch (error) {
    next(error);
  }
};
