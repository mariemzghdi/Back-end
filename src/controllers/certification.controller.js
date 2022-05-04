const httpStatus = require("http-status");
const Certif = require("../models/certification.model");
const PdfService = require("../services/pdf.service");
const EmailService = require("../services/email.service");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a Certif
  const certif = new Certif({
    ownerfirstname: req.body.ownerfirstname,
    ownerlirstname: req.body.ownerlirstname,
    ownerId: req.body.ownerId,
    productName: req.body.productName,
    productRef: req.body.productRef,
    url: req.body.url,
  });
  // Save Tutorial in the database
  Certif.create(certif, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating certif .",
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
// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  Certif.updateById(req.params.id, new Certif(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Certif with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Certif with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
exports.delete = (req, res) => {
  Certif.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Certif with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Certif with id " + req.params.id,
        });
      }
    } else res.send({ message: `Certif was deleted successfully!` });
  });
};

  exports.generate = async (req, res, next) => {
    try {
      const pdf = await PdfService.createpdf({});
      return res.success(pdf);
    } catch (error) {
      return next(error);
    }
  };

  exports.send = async (req, res, next) => {
    try {
      const { email, subject, content } = req.body;
      await sendMail(email, subject, content);
      return res.success(email);
    } catch (error) {
      return next(error);
    }
  };


