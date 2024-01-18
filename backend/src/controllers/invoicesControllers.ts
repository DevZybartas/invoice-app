import { RequestHandler } from "express";
import InvoiceModel from "../models/invoice";

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

export const createInvoice: RequestHandler = async (req, res, next) => {
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
    });
    res.status(201).json(newInvoice);
  } catch (error) {
    next(error);
  }
};
