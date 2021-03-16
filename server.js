const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

//load env file in order to use environment variables
dotenv.config({ path: './config/config.env' });

// Connect to the database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');

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
const server = app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);

// handle the unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
});
