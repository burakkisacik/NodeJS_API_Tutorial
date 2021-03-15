const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//Route files
const bootcamps = require('./routes/bootcamps');

//load env file in order to use environment variables
dotenv.config({ path: './config/config.env' });

//initialize app
const app = express();

//this middleware(logger) will only run in dev environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

//define the port
const PORT = process.env.PORT || 5000;

//run the server
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
