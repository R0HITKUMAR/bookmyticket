import express from "express";
const app = express.Router();

import { submitTicket, retrieveAll, retrieve } from "../API/Ticket.js";

app.post("/issueTicket", submitTicket);
app.get("/retrieveAll/:email", retrieveAll);
app.get("/retrieve/:id", retrieve);

export default app;
