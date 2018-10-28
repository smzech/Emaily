const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User"); //must be loaded before passport because passport needs the User model
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express(); //used to set up config that will listen for requests

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // how long can exist in browser
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

// heroku has the ability to inject environment variables
// all caps so should be CONSTANT; if not var from heroku, assign port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
