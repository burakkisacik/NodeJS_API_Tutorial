const express = require('express');
const dotenv = require('dotenv');

//load env file in order to use environment variables
dotenv.config({ path: './config/config.env' });

//initialize app
const app = express();

//define the port
const PORT = process.env.PORT || 5000;

//run the server
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
