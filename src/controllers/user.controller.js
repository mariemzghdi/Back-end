const httpStatus = require('http-status');
const User =require('../models/user.model')


const ErrorHandler = require('../helpers/apiError.helpers');
const ErrorHttp = require('../helpers/errorhttp.helper');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a user
  const user = new User({
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    email:req.body.email,
    Role: req.body.Role,
    Password:req.body.Password,
  });
    // Save user in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial.",
        });
      else res.send(data);
    });
  };


  exports.findOne = (req, res) => {
    User.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "Error retrieving User with id " + req.params.id,
          });
        }
      } else res.send(data);
    });
  };

 exports.list = (req, res) => {
  User.getAllUser((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  User.updateById(req.params.id, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating  user with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.id,
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};
