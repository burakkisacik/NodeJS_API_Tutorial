const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

//Route files
const bootcamps = require('./routes/bootcamps');

//load env file in order to use environment variables
dotenv.config({ path: './config/config.env' });

//initialize app
const app = express();

//logger (it will log what clients want)
app.use(logger);

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
