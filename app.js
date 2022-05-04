const express = require('express');
const cors = require('cors');
const app = express();
const httpStatus = require('http-status');
/* const stuffRouter = require('./src/routers/stuff.router'); */
const authRouter = require('./src/routers/auth.router');
const userRouter = require('./src/routers/user.router');
const certifRouter = require('./src/routers/certfication.router');
const ErrorHandler = require('./src/helpers/apiError.helpers');
const {
  errorConverter,
  handleError,
} = require('./src/middlewares/error.middleware');
const handlerResponse = require('./src/middlewares/response.middleware');
const config = require('./src/config/environment');


/* cors */
app.use(cors());

// parse json
app.use(express.json());

// handlerResponse
app.use(handlerResponse);


// Router
/* app.use('/api/stuff', stuffRouter); */
app.use('/api/auth', authRouter);



app.use('/api', certifRouter);
// send back a 404 error
app.use((req, res, next) => {
  next(new ErrorHandler(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ErrorHandler
app.use(errorConverter);

// handle error
app.use(handleError);

module.exports = app;
