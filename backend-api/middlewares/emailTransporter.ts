import nodemailer from "nodemailer";

// Nodemailer setup
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "leralyakisheva@gmail.com",
    pass: process.env.NODEMAILER_PASS,
  },
});
