import express from "express";
const app = express.Router();

import { Login } from "../API/auth/Login.js";
import Register from "../API/auth/Register.js";
import Validate from "../API/auth/Validate.js";

app.post("/login", Login);
app.post("/register", Register);
app.get("/validate/:token", Validate);

export default app;
