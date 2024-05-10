import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
// import { readdirSync } from "fs";
import mongoose from "mongoose";
// const cors = require('cors')
// const express = require('express')
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// const morgan = require('morgan')
// const fs = require('fs')

// const router = require('./routes/auth')
import authRoute from './routes/authRoute.js'
dotenv.config();

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database not connected");
    console.log(err);
  });

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use('/api', authRoute)

// console.log(router);
 const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})