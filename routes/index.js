const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  // console.log("You can see this in the terminal");
  // console.log will output to the console
  const rui = { name: "Rui", familiar: "Mochi", cool: true };
  // res.send("Hey! It works!");

  res.json(rui);
  // use .json method

  // res.send(req.query.name);
  // use this for get request parameter

  // res.json(req.query);
  // better yet, return as get request as json
});

module.exports = router;
