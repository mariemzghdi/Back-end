const httpStatus = require('http-status');

const mongoose = require('mongoose');
const ErrorHandler = require('../helpers/apiError.helpers');

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ErrorHandler)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ErrorHandler(statusCode, message, err.stack);
  }
  next(error);
};
const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = {
  errorConverter,
  handleError,
};
