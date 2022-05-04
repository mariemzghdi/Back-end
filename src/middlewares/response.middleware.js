const handlerResponse = (req, res, next) => {
  res.success = (data) => {
    res.json({
      success: true,
      data,
    });
  };
  next();
};

module.exports = handlerResponse;
