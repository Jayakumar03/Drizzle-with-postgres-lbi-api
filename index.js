import express from "express";
import db from "./db/db.js";

const app = express();

app.listen(4000, () => console.log("server is running at port", 4000));
