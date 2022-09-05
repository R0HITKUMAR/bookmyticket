import express from "express";
var app = express.Router();
import User from "../../models/User.js";
import bcrypt from "bcrypt";

app.post("/register", async (req, res) => {
  const user = req.body;
  const takenEmail = await User.findOne({ email: user.email });

  if (takenEmail) {
    res.send({ message: "Account already Exists" });
  } else {
    user.password = await bcrypt.hash(user.password, 10);
    const dbUser = new User({
      email: user.email,
      password: user.password,
      name: user.name,
    });
    dbUser
      .save()
      .then((user) => {
        res.send({
          message: "Account Created Successfully! Please Login",
        });
      })
      .catch((err) => {
        res.send({ message: err });
      });
  }
});

export default app;
