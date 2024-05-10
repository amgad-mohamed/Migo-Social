import express from "express";

const postRoute = express.Router();

postRoute.post("/register75", (req, res) => {
  console.log("post", req.body);
});
export default postRoute;
