const sql = require('./db');

const Certif = function(certif){
  this.ownerfirstname = certif.ownerfirstname;
  this.ownerlirstname = certif.ownerlirstname;
  this.ownerId = certif.ownerId;
  this.productName=certif.productName;
  this.productRef = certif.productRef;
  this.url = certif.url;
}
Certif.create = (newCertif, result) => {
  sql.query("INSERT INTO certifData SET ?", newCertif, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Certif: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};
Certif.findById = (id, result) => {
  sql.query(`SELECT * FROM certifData WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Certif: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};
Certif.updateById = (id, certif, result) => {
  sql.query(
    "UPDATE CertifData SET ownerfirstname = ?, ownerlirstname = ?, ownerId = ? , productName = ? , productRef =? WHERE id = ?",
    [Certif.ownerfirstname, certif.ownerlirstname, Certif.ownerId, Certif.productName, Certif.productRef, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated  Certif: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};
Certif.remove = (id, result) => {
  sql.query("DELETE FROM certifData WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Certif with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted Certif with id: ", id);
    result(null, res);
  });
};

module.exports =  Certif;
