const express = require("express");
const app = express(); //used to set up config that will listen for requests

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// heroku has the ability to inject environment variables
// all caps so should be CONSTANT; if not var from heroku, assign port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);
