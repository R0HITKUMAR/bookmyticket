import axios from "axios";
import React from "react";

export default function BookTicket(props) {
  const [ticketNo, setTicketNo] = React.useState("");
  const [Ticket, setTicket] = React.useState({
    Movie: props.Movie.Series_Title,
    Date: "",
    Cinema_Hall: "",
    NT: "",
    Email: props.user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/ticket/issueTicket", Ticket)
      .then((res) => {
        if (res.data.status === "success") {
          setTicketNo(res.data.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <h4 className="text-center">Online Movie Ticket Booking</h4>
      <h6 className="text-center">{props.Movie.Series_Title}</h6>
      <div className="row">
        <div className="card">
          <div className="row">
            <div className="col-2 text-center">
              <img
                className="card-img-top"
                src={props.Movie.Poster_Link}
                alt="Card"
              />
            </div>
            <div className="col-10 p-3">
              <h5 className="card-title">{props.Movie.Series_Title}</h5>
              <div>
                <span class="badge text-bg-warning">
                  {props.Movie.Released_Year}
                </span>
                <span class="badge text-bg-primary">{props.Movie.Runtime}</span>
                <span class="badge text-bg-success">
                  {props.Movie.Meta_score}
                </span>
              </div>
              <div>
                <span class="badge text-bg-dark">
                  {props.Movie.IMDB_Rating} ⭐
                </span>
                <span class="badge text-bg-dark">
                  {props.Movie.No_of_Votes} Votes
                </span>
              </div>
              <div>
                <span class="badge text-bg-dark">{props.Movie.Genre}</span>
              </div>
              <p className="card-text mt-1" style={{ fontSize: "small" }}>
                {props.Movie.Overview}
              </p>
              <div className="row">
                <div className="col-3">
                  <select
                    class="form-select"
                    name="Cinema_Hall"
                    aria-label="Default select example"
                    onChange={handleChange}
                    value={Ticket.Cinema_Hall}
                  >
                    <option selected>Choose Cinema Hall</option>
                    <option value="Cinepolis, Janakpuri">
                      Cinepolis, Janakpuri
                    </option>
                    <option value="PVR, Janakpuri">PVR, Janakpuri</option>
                    <option value="IMAX Janakpuri">IMAX Janakpuri</option>
                    <option value="INOX Janakpuri">INOX Janakpuri</option>
                  </select>
                </div>
                <div className="col-3">
                  <select
                    class="form-select"
                    name="NT"
                    aria-label="Default select example"
                    onChange={handleChange}
                    value={Ticket.NT}
                  >
                    <option selected>Choose No of Tickets</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                  </select>
                </div>
                <div className="col-3">
                  <input
                    type="date"
                    name="Date"
                    onChange={handleChange}
                    value={Ticket.Date}
                    className="form-control"
                    placeholder="Date"
                  />
                </div>
                <div className="col-2">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-sm btn-primary m-1"
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {ticketNo && (
          <p className="text-center mt-5">
            Thanks for Booking
            <br />
            Your Ticket ID : {ticketNo}
          </p>
        )}
      </div>
    </div>
  );
}
