import Ticket from "../models/Ticket.js";

function submitTicket(req, res) {
  const ticket = req.body;
  console.log(ticket);
  const newTicket = new Ticket({
    Movie: ticket.Movie,
    Date: ticket.Date,
    Cinema_Hall: ticket.Cinema_Hall,
    NT: ticket.NT,
    Email: ticket.Email,
  });
  newTicket
    .save()
    .then((ticket) => {
      res.send({
        status: "success",
        id: ticket._id,
        message: "Ticket Booked Successfully!",
      });
    })
    .catch((err) => {
      res.send({ status: "success", message: err });
    });
}

function retrieveAll(req, res) {
  const email = req.params.email;
  Ticket.find({ Email: email })
    .then((tickets) => {
      res.send(tickets);
    })
    .catch((err) => {
      res.send({ message: err });
    });
}

function retrieve(req, res) {
  const id = req.params.id;
  Ticket.findById(id)
    .then((ticket) => {
      res.send(ticket);
      console.log(ticket);
    })
    .catch((err) => {
      res.send({ message: err });
    });
}

export { submitTicket, retrieveAll, retrieve };
