import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    Movie: String,
    Date: String,
    Cinema_Hall: String,
    NT: String,
    Email: String,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
