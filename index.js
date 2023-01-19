const express = require('express');
const dotnev = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
dotnev.config({ path: './config.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

require('./db/Conn');
app.use(express.json());
// app.use(require('./Router/Auth.js'));
app.use(require('./Router/UniversityRoutes.js'));
// app.use(require('./Router/CustomerRoute.js'));
app.use(require('./Router/adminRoutes.js'));
app.use(require('./Router/membershipRoutes.js'));
app.use(cors());
const PORT = process.env.PORT || 4000;
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);


if ( process.env.NODE_ENV == "production"){

  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })


}

app.listen(PORT, () => {
  console.log('Server is running at port ', `${PORT}`);
});
