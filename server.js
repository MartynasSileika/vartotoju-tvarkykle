const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

// MiddleWare
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.listen(3000);
